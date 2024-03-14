import { DrawerListProps } from "@/types";
import { FiHome } from "react-icons/fi";
import { DiRasberryPi } from "react-icons/di";
import { TbDeviceDesktopPlus } from "react-icons/tb";

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
    title: "Dispositivos",
  },
  {
    type: "unique",
    title: "Lista de dispositivos",
    route: "/devices",
    icon: DiRasberryPi,
  },
  {
    type: "unique",
    title: "Adicionar dispositivo",
    route: "/devices/create",
    icon: TbDeviceDesktopPlus,
  },
];
