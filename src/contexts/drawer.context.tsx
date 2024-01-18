"use client";

import { createContext, useState } from "react";
import { DrawerContextData, DrawerProviderProps } from "../types";

export const DrawerContext = createContext({} as DrawerContextData);

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onToggle = () => {
    isFixed ? onUnfixed() : onFixed();
  };

  const onFixed = () => {
    setIsFixed(true);
    setIsOpen(true);
  };

  const onUnfixed = () => {
    setIsFixed(false);
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{ isOpen, isFixed, onOpen, onClose, onToggle, onFixed, onUnfixed }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
