import React from "react";
import { FiLogOut } from "react-icons/fi";
import { Box, Fade, Icon, Link, Text } from "@chakra-ui/react";
import { useDrawer } from "@/hooks/useDrawer";

const DrawerFooter: React.FC = () => {
  const { isOpen } = useDrawer();

  return (
    <Box p="3">
      <Link
        w="100%"
        py="2"
        px="4"
        display="flex"
        alignItems="center"
        color="white"
        background="gray.900"
        transition=".3s"
        _hover={{
          color: "white",
        }}
      >
        <Icon as={FiLogOut} fontSize="lg" my="3px" />
        <Fade in={isOpen} unmountOnExit={true}>
          <Text
            as="span"
            ml="2"
            fontSize="sm"
            fontWeight="300"
            whiteSpace="nowrap"
          >
            Sair
          </Text>
        </Fade>
      </Link>
    </Box>
  );
};

export default DrawerFooter;
