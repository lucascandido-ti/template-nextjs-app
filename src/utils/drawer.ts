import { DrawerListProps } from "@/types";
import { FiEye, FiHome } from "react-icons/fi";

export const drawerList: DrawerListProps[] = [
  {
    type: "unique",
    title: "Dashboard",
    route: "/",
    icon: FiHome,
    matchExactHref: true,
    isSubMenu: false,
  },
  {
    type: "title",
    title: "Pontos de Acesso",
  },
  {
    type: "unique",
    title: "Monitorar",
    route: "/access-point",
    icon: FiEye,
  },
];
