PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_forms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`description` text,
	`created_at` integer NOT NULL,
	`updated_at` integer,
	`user_id` text NOT NULL,
	`fields` text
);
--> statement-breakpoint
INSERT INTO `__new_forms`("id", "name", "description", "created_at", "updated_at", "user_id", "fields") SELECT "id", "name", "description", "created_at", "updated_at", "user_id", "fields" FROM `forms`;--> statement-breakpoint
DROP TABLE `forms`;--> statement-breakpoint
ALTER TABLE `__new_forms` RENAME TO `forms`;--> statement-breakpoint
PRAGMA foreign_keys=ON;