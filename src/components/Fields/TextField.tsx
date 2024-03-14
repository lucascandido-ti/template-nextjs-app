import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export type TextFieldProps = Omit<InputProps, "label"> & {
  name: string;
  label: string;
  helperText?: string;
};

export default function TextField({
  name,
  label,
  helperText,
  ...props
}: TextFieldProps) {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl isInvalid={!!errors[name]}>
          <Input
            label={label}
            fullWidth
            defaultValue={getValues()[`${name}`]}
            error={!!errors[name]}
            helperText={<ErrorMessage errors={errors} name={name} />}
            {...field}
            {...props}
          />
          {errors[name] ? (
            <FormErrorMessage>{errors[name].message}</FormErrorMessage>
          ) : (
            <FormHelperText>{helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
