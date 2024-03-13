import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { publicProcedure, router } from "./trpc";
import { devices, users } from "./db";
import { z } from "zod";

export const host = process.env.POSTGRES_HOST;
export const port = process.env.POSTGRES_PORT;
export const database = process.env.POSTGRES_DB;
export const user = process.env.POSTGRES_USER;
export const password = process.env.POSTGRES_PASSWORD;

export const databaseURL = `postgres://${user}:${password}@${host}:${port}/${database}`;

const migrationClient = postgres(databaseURL, { max: 1 });
migrate(drizzle(migrationClient), { migrationsFolder: "drizzle" });

const queryClient = postgres(databaseURL);
export const db = drizzle(queryClient);

export const appRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await db.select().from(users);
  }),
  getDevices: publicProcedure.query(async () => {
    return await db.select().from(devices);
  }),
  addDevice: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        host: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { name, description, host } = opts.input;

      await db
        .insert(devices)
        .values({
          // @ts-ignore
          name: name,
          description,
          host: host,
          created_at: new Date(),
          updated_at: new Date(),
        })
        .catch((err) => {
          console.log("Erro ao tentar inserir um novo dispositivo", err);
        });

      return true;
    }),
});

export type AppRouter = typeof appRouter;
