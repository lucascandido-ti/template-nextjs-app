import React from "react";
import { Icon, Text } from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDrawer } from "@/hooks/useDrawer";

const DrawerTitle: React.FC<{ title: string }> = ({ title }) => {
  const { isOpen } = useDrawer();

  return (
    <Text
      w="100%"
      py="2"
      px="6"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      fontSize="xs"
      color="gray.500"
      textTransform="uppercase"
      whiteSpace="nowrap"
    >
      {isOpen ? title : <Icon as={FiMoreHorizontal} fontSize="lg" my="3px" />}
    </Text>
  );
};

export default DrawerTitle;
