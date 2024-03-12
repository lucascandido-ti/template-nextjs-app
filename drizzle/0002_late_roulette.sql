CREATE TABLE IF NOT EXISTS "devices" (
	"id" text PRIMARY KEY NOT NULL,
	"tbn" text NOT NULL,
	"created_at" date NOT NULL,
	"updated_at" date
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" date;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_id_idx" ON "devices" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_host_idx" ON "devices" ("tbn");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_created_at_idx" ON "devices" ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "devices_updated_at_idx" ON "devices" ("updated_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_id_idx" ON "users" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_tbn_idx" ON "users" ("tbn");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" ("updated_at");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");