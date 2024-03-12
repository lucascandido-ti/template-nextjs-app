import { date, index, integer, pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: integer("id").primaryKey(),
    tbn: text("tbn").notNull(),
    email: text("email").unique().notNull(),
    created_at: date("created_at").notNull(),
    updated_at: date("updated_at"),
  },
  (users) => ({
    users_id_idx: index("users_id_idx").on(users.id),
    users_tbn_idx: index("users_tbn_idx").on(users.tbn),
    users_email_idx: index("users_email_idx").on(users.email),
    users_created_at_idx: index("users_created_at_idx").on(users.created_at),
    users_updated_at_idx: index("users_updated_at_idx").on(users.updated_at),
  })
);

export const devices = pgTable(
  "devices",
  {
    id: text("id").primaryKey(),
    host: text("tbn").notNull(),
    created_at: date("created_at").notNull(),
    updated_at: date("updated_at"),
  },
  (devices) => ({
    devices_id_idx: index("devices_id_idx").on(devices.id),
    devices_host_idx: index("devices_host_idx").on(devices.host),
    devices_created_at_idx: index("devices_created_at_idx").on(
      devices.created_at
    ),
    devices_updated_at_idx: index("devices_updated_at_idx").on(
      devices.updated_at
    ),
  })
);
