import { eq, and } from "drizzle-orm";
import { getQuery, eventHandler } from "h3";

import { useDrizzle } from "~/server/database/utils/use-drizzle";
import { forms } from "~/server/database/schema";

export default eventHandler(async (event) => {
  try {
    const userId = getQuery(event).userId;
    const formId = getQuery(event).formId;

    const item = await useDrizzle()
      .select()
      .from(forms)
      .where(
        and(eq(forms.userId, userId as string), eq(forms.id, formId as number))
      );

    if (!item) {
      throw new Error("Form not found");
    }

    return {
      status: 200,
      data: item,
    };
  } catch (error) {
    return {
      status: 500,
      data: null,
      message: "Failed to fetch form",
    };
  }
});
