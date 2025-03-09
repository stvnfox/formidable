import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const forms = sqliteTable("forms", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  userId: text("user_id").notNull(),
  fields: text("fields", { mode: "json" })
    // create the right type
    .$type<Record<string, string>>()
    .notNull(),
});

export const formSubmissions = sqliteTable("form_submissions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  formId: integer("form_id").references(() => forms.id),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  data: text("data", { mode: "json" })
    // create the right type
    .$type<Record<string, string>>()
    .notNull(),
});
