import React from "react";
import { Input, InputProps } from "@chakra-ui/react";
import {
  useFormContext,
  useController,
  RegisterOptions,
} from "react-hook-form";
import InputLayout from "../inputLayout";

interface TextInputProps extends InputProps {
  name: string;
  label: string;
  rules?: RegisterOptions;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  rules,
  ...rest
}) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
  } = useController({
    control,
    name,
    rules,
  });

  return (
    <InputLayout name={name} label={label}>
      <Input
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </InputLayout>
  );
};

export default TextInput;
