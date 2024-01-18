"use client";

import "./globals.css";

import { Inter } from "next/font/google";

import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import { DrawerProvider } from "@/contexts/drawer.context";

import Drawer from "../components/drawer";
import { useDrawer } from "../hooks/useDrawer";
import AppBar from "../components/appBar";
import TRPCProvider from "./api/trpc/_trpc/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFixed } = useDrawer();

  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>
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
        </TRPCProvider>
      </body>
    </html>
  );
}
