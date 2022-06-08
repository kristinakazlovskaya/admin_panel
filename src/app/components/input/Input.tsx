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
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  rules,
  defaultValue,
  ...rest
}) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    rules,
    defaultValue: defaultValue || "",
  });

  return (
    <InputLayout name={name} label={label}>
      <Input
        ref={ref}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </InputLayout>
  );
};

export default TextInput;
