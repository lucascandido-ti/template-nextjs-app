"use client";

import "react-perfect-scrollbar/dist/css/styles.css";

import PerfectScrollbar from "react-perfect-scrollbar";

import React, { useState } from "react";

import { Box, chakra, Flex } from "@chakra-ui/react";

import DrawerHeader from "./drawerHeader";
import DrawerMenu from "./drawerMenu";
import DrawerTitle from "./drawerTitle";
import DrawerSubMenu from "./drawerSubMenu";
import DrawerFooter from "./drawerFooter";
import { useDrawer } from "@/hooks/useDrawer";
import { drawerList } from "@/utils/drawer";

const Drawer: React.FC = () => {
  const { isOpen, isFixed, onOpen, onClose, onUnfixed } = useDrawer();
  const [groupSubMenuOpen, setGroupSubMenuOpen] = useState("");

  const DrawerOverlay = chakra(Box, {
    baseStyle: {
      position: "fixed",
      h: "100vh",
      w: "100vw",
      bgColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "base",
      display: { base: isOpen ? "block" : "none", md: "none" },
    },
  });

  return (
    <Flex
      as="aside"
      w={isOpen ? "265px" : "75px"}
      h="100vh"
      bg="gray.700"
      direction="column"
      position="fixed"
      top="0"
      left={{
        base: isOpen ? "0px" : "-100px",
        md: "0px",
      }}
      transition="width .3s ease-in-out"
      zIndex="sticky"
      onMouseEnter={onOpen}
      onMouseLeave={() => !isFixed && onClose()}
      data-testid="drawer"
    >
      <DrawerOverlay onClick={onUnfixed} />

      <DrawerHeader />

      <PerfectScrollbar
        options={{ suppressScrollX: true, useBothWheelAxes: false }}
        style={{
          width: "100%",
          paddingTop: "0.5rem",
        }}
      >
        {drawerList.map((el: any) => {
          switch (el.type) {
            case "unique":
              return (
                <DrawerMenu
                  key={`unique-${el.title}`}
                  title={el.title}
                  route={el.route}
                  icon={el.icon}
                  matchExactHref={el.matchExactHref ?? true}
                  isSubMenu={el.sub ?? false}
                />
              );
            case "group":
              return (
                <DrawerSubMenu
                  key={`group-${el.title}`}
                  title={el.title}
                  icon={el.icon}
                  list={el.list}
                  groupSubMenuOpen={groupSubMenuOpen}
                  setGroupSubMenuOpen={setGroupSubMenuOpen}
                />
              );
            case "title":
              return <DrawerTitle key={`title-${el.title}`} title={el.title} />;
            default:
              return <></>;
          }
        })}
      </PerfectScrollbar>

      <DrawerFooter />
    </Flex>
  );
};

export default Drawer;
