import React from "react";
import { IconType } from "react-icons";

export type DrawerMenuProps = {
  title: string;
  route: string;
  icon: IconType;
  isSubMenu?: boolean;
  matchExactHref?: boolean;
};

export type SubMenuList = {
  title: string;
  route: string;
  icon?: IconType;
};

export type DrawerSubMenuProps = {
  title: string;
  icon: IconType;
  list: SubMenuList[];
  groupSubMenuOpen: string;
  setGroupSubMenuOpen: React.Dispatch<React.SetStateAction<string>>;
};

type DrawerUnique = {
  type: "unique";
  title: string;
  route: string;
  icon: IconType;
  matchExactHref?: boolean;
  isSubMenu?: boolean;
};

type DrawerGroup = {
  type: "group";
  title: string;
  icon: IconType;
  list: SubMenuList[];
};

type DrawerTitle = {
  type: "title";
  title: string;
};

export type DrawerListProps = DrawerUnique | DrawerGroup | DrawerTitle;

export type DrawerContextData = {
  isOpen: boolean;
  isFixed: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onFixed: () => void;
  onUnfixed: () => void;
};

export type DrawerProviderProps = {
  children: React.ReactNode;
};
