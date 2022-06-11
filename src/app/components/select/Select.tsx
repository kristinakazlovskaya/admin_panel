import React from "react";
import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";
import { useFormContext, useController } from "react-hook-form";
import InputLayout from "../inputLayout";

interface CustomSelectProps extends SelectProps {
  name: string;
  label: string;
  options: any[];
  optionsValueKey: string;
  optionsLabelKey: string;
  defaultValue?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  name,
  label,
  optionsValueKey,
  optionsLabelKey,
  options,
  defaultValue,
  ...rest
}) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    control,
    name,
    defaultValue: defaultValue || "",
  });

  return (
    <InputLayout name={name} label={label}>
      <ChakraSelect
        ref={ref}
        name={name}
        id={name}
        value={value}
        placeholder="-"
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      >
        {options.map((option) => (
          <option key={option[optionsValueKey]} value={option[optionsValueKey]}>
            {option[optionsLabelKey]}
          </option>
        ))}
      </ChakraSelect>
    </InputLayout>
  );
};

export default Select;
