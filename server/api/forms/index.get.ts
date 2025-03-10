import { useDrizzle } from "~/server/database/utils/use-drizzle"
import { forms } from "~/server/database/schema"

export default eventHandler(async () => {
    try {
        const items = await useDrizzle().select().from(forms).all()
        return {
            status: 200,
            items
        }
    } catch (error) {
        return {
            status: 500,
            message: "Failed to fetch forms"
        }
    }
})
