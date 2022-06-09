import React from "react";
import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";
import { useFormContext, useController } from "react-hook-form";
import InputLayout from "../inputLayout";

interface CustomSelectProps extends SelectProps {
  name: string;
  label: string;
  data: any[];
  dataValueKey: string;
  dataLabelKey: string;
  defaultValue?: string;
}

const Select: React.FC<CustomSelectProps> = ({
  name,
  label,
  dataValueKey,
  dataLabelKey,
  data,
  defaultValue,
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
        name={name}
        id={name}
        value={value}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="-"
      >
        {data.map((item) => (
          <option key={item[dataValueKey]} value={item[dataValueKey]}>
            {item[dataLabelKey]}
          </option>
        ))}
      </ChakraSelect>
    </InputLayout>
  );
};

export default Select;
