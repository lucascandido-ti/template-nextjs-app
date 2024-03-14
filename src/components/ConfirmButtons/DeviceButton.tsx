"use client";

import { Button } from "@chakra-ui/react";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form";

interface IDeviceButton {
  handleSubmit?: () => void;
}
export const DeviceButton: React.FC<IDeviceButton> = ({ handleSubmit }) => {
  const { trigger } = useFormContext();

  const onConfirm = useCallback(async () => {
    const isValidate = await trigger(["name", "host"]);
    if (!isValidate) return;
    return handleSubmit;
  }, [trigger, handleSubmit]);

  return (
    <Button type="submit" onClick={onConfirm}>
      Salvar
    </Button>
  );
};

export default DeviceButton;
