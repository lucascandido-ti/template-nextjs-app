"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { Loading } from "@/components/loading";

import { trpc } from "../api/trpc/_trpc/client";

export function AccessPoint() {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  const setDone = trpc.setDone.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const [content, setContent] = useState("");

  return (
    <Container>
      <Box>
        {!getTodos.data && (
          <Flex w="100%" justify="center" alignItems="center">
            <Loading />
          </Flex>
        )}

        {getTodos.data?.length && (
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Hello! list by TRPC</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Content</Th>
                  <Th isNumeric>Done</Th>
                </Tr>
              </Thead>
              <Tbody>
                {getTodos.data?.length &&
                  getTodos.data.map(({ id, content, done }) => {
                    return (
                      <>
                        <Tr key={id}>
                          <Td>
                            <FormControl key={id}>
                              <Checkbox
                                id={`check-${{ id }}`}
                                isChecked={!!done}
                                onChange={async () => {
                                  console.log(
                                    `Teste: #ID: ${id}, #DONE: ${done}`
                                  );
                                  await setDone.mutate({
                                    id: id,
                                    done: !!done ? 0 : 1,
                                  });
                                }}
                              />
                            </FormControl>
                          </Td>
                          <Td>{content}</Td>
                          <Td isNumeric>{done}</Td>
                        </Tr>
                      </>
                    );
                  })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Id</Th>
                  <Th>Content</Th>
                  <Th isNumeric>Done</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        )}
      </Box>
      <Divider />
      <Box>
        <FormControl>
          <FormLabel>Content</FormLabel>
          <Input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <FormHelperText>Add content on SQLite with tRPC.</FormHelperText>
          <Button
            onClick={async () => {
              if (content.length) {
                addTodo.mutate(content);
                setContent("");
              }
            }}
          >
            Add todo
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}

export default AccessPoint;
