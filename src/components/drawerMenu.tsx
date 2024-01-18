"use client";

import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { Fade, Icon, Text } from "@chakra-ui/react";
import { useDrawer } from "@/hooks/useDrawer";
import { DrawerMenuProps } from "@/types";
import { usePathname } from "next/navigation";

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  title,
  route,
  icon,
  isSubMenu = false,
  matchExactHref = true,
}) => {
  const { isOpen } = useDrawer();
  const asPath = usePathname();

  const isActive = matchExactHref
    ? asPath === route
    : asPath.startsWith(String(route));

  return (
    <Link
      href={route}
      w="100%"
      py="2"
      px="6"
      display="flex"
      alignItems="center"
      color={isActive ? "white" : "gray.200"}
      background={isActive ? "cc.red" : ""}
      transition=".3s"
      _hover={{
        ...(!isActive ? { background: "gray.900" } : null),
        color: "white",
      }}
    >
      <Icon as={icon} fontSize="lg" my="3px" />
      <Fade in={isOpen} unmountOnExit={true}>
        <Text
          as="span"
          ml="2"
          fontSize="sm"
          fontWeight="300"
          whiteSpace="nowrap"
        >
          {title}
        </Text>
      </Fade>
    </Link>
  );
};

export default DrawerMenu;
