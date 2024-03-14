"use client";

import { useDrawer } from "@/hooks/useDrawer";

import { BsSunFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import {
  Avatar,
  chakra,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import React, { useCallback } from "react";

const AppBar: React.FC = () => {
  const { isFixed, onToggle } = useDrawer();
  const { colorMode, setColorMode } = useColorMode();

  const handleToggleColorMode = useCallback(() => {
    colorMode === "light" ? setColorMode("dark") : setColorMode("light");
  }, [colorMode, setColorMode]);

  const OpenDrawerButton = chakra(IconButton, {
    baseStyle: {
      size: "lg",
      border: "none",
      color: "cc.green",
      textAlign: "center",
      display: { base: "flex", md: "none" },
      _hover: { background: "gray.900" },
      _active: { background: "gray.900" },
      _focus: { outline: "none" },
    },
  });

  const user = {
    name: "Portal Test Viewer",
  };

  return (
    <Flex
      w={{
        base: "100%",
        md: isFixed ? "calc(100% - 265px)" : "calc(100% - 75px)",
      }}
      bg="gray.900"
      h="65px"
      position="fixed"
      zIndex="dropdown"
      px={{ base: "4", md: "8" }}
      justify={{ base: "space-between", md: "flex-end" }}
      align="center"
      transition=".3s ease-in-out"
      data-testid="appBar"
    >
      <OpenDrawerButton
        icon={isFixed ? <FiChevronsLeft /> : <FiChevronsRight />}
        aria-label="Drawer Toggle"
        variant="outline"
        color="white"
        _hover={{ color: "white" }}
        onClick={onToggle}
      />

      <HStack spacing="4">
        <IconButton
          icon={colorMode === "light" ? <RiMoonClearFill /> : <BsSunFill />}
          aria-label="Drawer Toggle"
          variant="link"
          color="white"
          _hover={{ color: "white" }}
          size="lg"
          onClick={handleToggleColorMode}
          data-testid="appBar_ColorButton"
        />
        <Text fontSize="sm" color="white" noOfLines={1}>
          {user?.name}
        </Text>
        <Avatar name={user?.name} size="sm" color="white" bg="cc.red" />
      </HStack>
    </Flex>
  );
};

export default AppBar;
