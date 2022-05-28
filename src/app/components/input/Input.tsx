import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input as ChakraInput,
  Box,
  BoxProps,
} from "@chakra-ui/react";
import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

interface InputProps extends BoxProps {
  name: string;
  label: string;
  type?: string;
  error: FieldError;
  rules?: RegisterOptions;
  register: UseFormRegister<FieldValues>;
  rest?: string[];
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  error,
  rules,
  register,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraInput
          id={name}
          type={type}
          placeholder={label}
          {...register(name, rules)}
        />
        <FormErrorMessage>{error && error.message}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default Input;
