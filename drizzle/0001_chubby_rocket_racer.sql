CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY NOT NULL,
	"tbn" text NOT NULL,
	"email" text NOT NULL,
	"created_at" date NOT NULL
);
