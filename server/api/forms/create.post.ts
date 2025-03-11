import { readBody, eventHandler } from "h3"

import { forms } from "~/server/database/schema"
import { useDrizzle } from "~/server/database/utils/use-drizzle"

export default eventHandler(async (event) => {
    const { userId } = await readBody(event)

    if (!userId) {
        return {
            status: 400,
            formId: null,
            message: "User ID is required"
        }
    }

    try {
        const form = await useDrizzle().insert(forms).values({
          createdAt: new Date(),
          userId: userId
        }).returning().get()
      
        return {
          status: 200,
          formId: form.id,
          message: "Form created successfully"
        }
    } catch (error) {
        return {
            status: 500,
            formId: null,
            message: `Failed to create form: ${error}`
        }
    }
  })