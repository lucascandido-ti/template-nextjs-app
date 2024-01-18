import React from "react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { useDrawer } from "@/hooks/useDrawer";
import { Fade, Flex, IconButton, Text } from "@chakra-ui/react";

const DrawerHeader: React.FC = () => {
  const { isOpen, isFixed, onToggle } = useDrawer();

  return (
    <Flex
      w="100%"
      height="65px"
      maxHeight="65px"
      direction="row"
      align="center"
      justify="center"
      px="3"
      py="6"
      bg="gray.900"
    >
      {/* begin: Logo */}
      <Flex
        flex="1"
        justify="flex-start"
        align="center"
        direction="row"
        flexWrap="nowrap"
        display={!isOpen ? "none" : "flex"}
      >
        <Fade in={isOpen} unmountOnExit={true}>
          <Text size="2xl" color="white" whiteSpace="nowrap">
            TBTemplateView
          </Text>
        </Fade>
      </Flex>
      {/* end: Logo */}

      {/* begin: Drawer Toggle */}
      <IconButton
        icon={isFixed ? <FiChevronsLeft /> : <FiChevronsRight />}
        aria-label="Drawer Toggle"
        size="lg"
        variant="outline"
        border="none"
        color="cc.green"
        textAlign="center"
        _hover={{ background: "gray.900" }}
        _active={{ background: "gray.900" }}
        _focus={{ outline: "none" }}
        onClick={onToggle}
      />
      {/* end: Drawer Toggle */}
    </Flex>
  );
};
export default DrawerHeader;
