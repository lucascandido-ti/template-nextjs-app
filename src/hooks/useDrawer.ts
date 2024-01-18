"use client";

import { useContext } from "react";
import { DrawerContext } from "../contexts/drawer.context";

export const useDrawer = () => {
  return useContext(DrawerContext);
};
