import React from "react";
import Head from "next/head";

import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import Drawer from "@/components/drawer";
import AppBar from "@/components/appBar";
import { useDrawer } from "@/hooks/useDrawer";
import { DrawerProvider } from "@/contexts/drawer.context";

export default function App({ children }: { children: React.ReactNode }) {
  const { isFixed } = useDrawer();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-16.png" sizes="16x16" />
        <link rel="icon" href="/images/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-48.png" sizes="48x48" />
        <link rel="icon" href="/images/favicon-64.png" sizes="64x64" />
        <link rel="icon" href="/images/favicon-128.png" sizes="128x128" />
      </Head>

      <ChakraProvider>
        <DrawerProvider>
          <Flex>
            <Drawer />
            <Box
              pos="relative"
              left={{ base: "0", md: isFixed ? "265px" : "75px" }}
              w={{
                base: "100%",
                md: isFixed ? "calc(100% - 265px)" : "calc(100% - 75px)",
              }}
              transition=".3s ease-in-out"
            >
              <AppBar />
              <Flex mt="65px" w="100%" direction="column">
                {children}
              </Flex>
            </Box>
          </Flex>
        </DrawerProvider>
      </ChakraProvider>
    </>
  );
}
