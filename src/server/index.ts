import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { UserRouter, DeviceRouter, devicesRouter, usersRouter } from "./routes";

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

export const appRouter = {
  ...devicesRouter,
  ...usersRouter,
};

export type AppRouter = DeviceRouter & UserRouter;
