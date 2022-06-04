import React from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const InputLayout: React.FC<{ name: string; label: string }> = ({
  children,
  name,
  label,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      {children}
      <FormErrorMessage>
        {errors[name] && errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default InputLayout;
