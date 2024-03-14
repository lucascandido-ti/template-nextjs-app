"use client";

import { Header } from "@/components";
import {
  Alert,
  AlertIcon,
  Button,
  Container,
  Divider,
  Fade,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import z from "zod";

import { DeviceButton } from "@/components/ConfirmButtons";
import { trpc } from "@/app/api/trpc/_trpc/client";
import { TextField } from "@/components/Fields";
import { redirect } from "@/utils";
import { useState } from "react";

export interface IFormData {
  name: string;
  description?: string;
  host: string;
}

export function CreateDevicePage() {
  const [isSubmit, setSubmit] = useState(false);
  const addDevice = trpc.addDevice.useMutation({
    onSettled() {
      setSubmit(true);
      const interval = setInterval(() => {
        clearInterval(interval);
        redirect("/devices");
      }, 3000);
    },
    onError(error) {
      console.log("Error: " + error);
    },
  });

  const validSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    description: z.string(),
    host: z
      .string()
      .regex(
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        "Formato de endereço IPv4 incorreto."
      )
      .nonempty("Endereço do dispositivo é obrigatório"),
  });

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      host: "",
    } as IFormData,
    resolver: zodResolver(validSchema),
  });

  const handleSubmit = form.handleSubmit(async (formData: IFormData) => {
    addDevice.mutate(formData);
  });

  return (
    <Stack>
      <Fade in={isSubmit}>
        {isSubmit && (
          <Alert status="success">
            <AlertIcon />
            Dispositivo salvo com sucesso. Você será redirecional em alguns
            segundos.
          </Alert>
        )}
      </Fade>

      <FormProvider {...form}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Header
            title="Criar novo dispositivo"
            subtitle="Tela para inclusão de novos dispositivos"
          >
            <DeviceButton />
            <Button>Cancelar</Button>
          </Header>
          <Container>
            <FormControl>
              <Stack>
                <FormLabel>Nome</FormLabel>
                <TextField
                  name="name"
                  label="Nome"
                  helperText="Nome para identificação do dispositivo."
                />

                <Divider />
                <FormLabel>Descrição</FormLabel>
                <TextField
                  name="description"
                  label="Descrição"
                  helperText="Descrição do dispositivo."
                />

                <Divider />
                <FormLabel>Hostname</FormLabel>
                <TextField
                  name="host"
                  label="Hostname"
                  helperText="Endereço local do dispositivo."
                />
              </Stack>
            </FormControl>
          </Container>
        </form>
      </FormProvider>
    </Stack>
  );
}

export default CreateDevicePage;
