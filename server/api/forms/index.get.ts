import { eq } from "drizzle-orm"
import { getQuery, eventHandler } from "h3"

import { useDrizzle } from "~/server/database/utils/use-drizzle"
import { forms } from "~/server/database/schema"

export default eventHandler(async (event) => {
    try {
        const userId = getQuery(event).id

        const items = await useDrizzle().select().from(forms).where(eq(forms.userId, userId as string))
        return {
            status: 200,
            items
        }
    } catch (error) {
        return {
            status: 500,
            items: [],
            message: "Failed to fetch forms"
        }
    }
})
