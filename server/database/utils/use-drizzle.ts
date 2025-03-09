import { drizzle } from "drizzle-orm/d1";
export { sql, eq, and, or } from "drizzle-orm";

import * as schema from "../schema";

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}

export type Form = typeof schema.forms.$inferSelect;
export type FormSubmission = typeof schema.formSubmissions.$inferSelect;
