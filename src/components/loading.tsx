import { Spinner, Stack } from "@chakra-ui/react";

export const Loading: React.FC = () => {
  return (
    <Stack direction="row" spacing={4} alignSelf="center" m={10}>
      <Spinner size="xl" />
    </Stack>
  );
};
