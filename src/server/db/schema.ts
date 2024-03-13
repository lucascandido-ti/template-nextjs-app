import { date, index, pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").notNull().primaryKey(),
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
    id: serial("id").notNull().primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    host: text("host").notNull(),
    created_at: date("created_at").notNull().defaultNow(),
    updated_at: date("updated_at"),
  },
  (devices) => ({
    devices_id_idx: index("devices_id_idx").on(devices.id),
    devices_name_idx: index("devices_name_idx").on(devices.name),
    devices_description_idx: index("devices_description_idx").on(
      devices.description
    ),
    devices_host_idx: index("devices_host_idx").on(devices.host),
    devices_created_at_idx: index("devices_created_at_idx").on(
      devices.created_at
    ),
    devices_updated_at_idx: index("devices_updated_at_idx").on(
      devices.updated_at
    ),
  })
);
