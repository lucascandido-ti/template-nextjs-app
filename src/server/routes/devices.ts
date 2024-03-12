import { db } from "@/server";
import { devices } from "@/db/schema";

import { publicProcedure, router } from "../trpc";

export const devicesRouter = router({
  getDevices: publicProcedure.query(async () => {
    return await db.select().from(devices);
  }),
});

export type DeviceRouter = typeof devicesRouter;
