"use client";

import { Header } from "@/components";
import { List, ListItem, Stack } from "@chakra-ui/react";
import { trpc } from "../api/trpc/_trpc/client";

export function DeviceListPage() {
  const getDevices = trpc.getDevices.useQuery();

  return (
    <Stack>
      <Header
        title="Lista de dispositivos"
        subtitle="Tela com todos os dispositivos gerenciados pelo portal"
      ></Header>
      <List>
        {getDevices.data?.length &&
          getDevices.data.map(({ name }, idx) => {
            return <ListItem key={idx}>{name}</ListItem>;
          })}
      </List>
    </Stack>
  );
}

export default DeviceListPage;
