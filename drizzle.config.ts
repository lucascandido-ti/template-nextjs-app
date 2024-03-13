import type { Config } from "drizzle-kit";
import { databaseURL } from "@/server";

export default {
  schema: "./src/server/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: databaseURL!,
  },
} satisfies Config;
