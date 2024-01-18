import Datebase from "better-sqlite3";

import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

import { z } from "zod";

import { publicProcedure, router } from "./trpc";

import { todos } from "@/db/schema";

const sqlite = new Datebase("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todos).all();
  }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    await db.insert(todos).values({ content: opts.input, done: 0 }).run();
    return true;
  }),
});

export type AppRouter = typeof appRouter;
