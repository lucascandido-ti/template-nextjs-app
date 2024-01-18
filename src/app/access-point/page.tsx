"use client";

import { Container } from "@chakra-ui/react";
import { trpc } from "../api/trpc/_trpc/client";
export function AccessPoint() {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <Container>
      Hello, with data by TRPC: {JSON.stringify(getTodos.data)}
    </Container>
  );
}

export default AccessPoint;
