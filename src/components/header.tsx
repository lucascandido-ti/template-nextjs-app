"use client";

import {
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeaderProps } from "@/types";

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  const boxColor = useColorModeValue("white", "gray.700");

  return (
    <Flex
      w="100%"
      h={{ base: "", md: "60px" }}
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ base: "flex-start", md: "center" }}
      bgColor={boxColor}
      px="8"
      py="4"
    >
      <Stack
        spacing="3"
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
      >
        <Heading as="h1" fontSize="md" fontWeight="medium">
          {title}
        </Heading>
        {subtitle && (
          <>
            <Divider
              orientation="vertical"
              h="25px"
              display={{ base: "none", md: "block" }}
            />
            <Text fontSize="xs">{subtitle}</Text>
          </>
        )}
      </Stack>
      <HStack mt={{ base: "3", md: "0" }} spacing="3">
        {children}
      </HStack>
    </Flex>
  );
};
