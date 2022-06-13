import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useFormContext, useController } from "react-hook-form";
import DateInput from "../dateInput";

const DateRangeInput: React.FC<{
  startLabel?: string;
  endLabel?: string;
  minDate?: Date;
  maxDate?: Date;
  name: string;
  label: string;
}> = ({ startLabel, endLabel, name, label, minDate, maxDate }) => {
  const { control } = useFormContext();

  const { field: startInput } = useController({
    control,
    name: `${name}-start`,
  });

  const { field: endInput } = useController({
    control,
    name: `${name}-end`,
  });

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend">{label}</FormLabel>
      <DateInput
        label={startLabel || "Start date"}
        name={`${name}-start`}
        selectsStart
        startDate={startInput.value}
        endDate={endInput.value}
        minDate={minDate || undefined}
        maxDate={maxDate || undefined}
      />
      <DateInput
        label={endLabel || "End date"}
        name={`${name}-end`}
        selectsEnd
        startDate={startInput.value}
        endDate={endInput.value}
        minDate={startInput.value}
        maxDate={maxDate || undefined}
      />
    </FormControl>
  );
};

export default DateRangeInput;
