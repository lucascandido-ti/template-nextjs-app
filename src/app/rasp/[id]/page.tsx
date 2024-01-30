import { Header } from "@/components";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";

export function RaspPage() {
  return (
    <Flex w="100%" h="calc(100vh - 65px)" direction={"column"}>
      <Header
        title="Raps 1"
        subtitle="Rasp rodando em homologação no IP: 127.0.0.1"
      >
        <Button>Reset Rasp</Button>
        <Button>Screenshot</Button>
      </Header>
      <iframe src="http://192.168.50.180" width={"100%"} height={"100%"} />
    </Flex>
  );
}

export default RaspPage;
