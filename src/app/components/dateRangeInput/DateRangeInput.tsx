import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import DateInput from "../dateInput";

const DateRangeInput: React.FC<{
  startLabel?: string;
  endLabel?: string;
  minDate?: Date;
  maxDate?: Date;
  name: string;
  label: string;
}> = ({ startLabel, endLabel, name, label, minDate, maxDate }) => {
  const { watch } = useFormContext();

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend">{label}</FormLabel>
      <DateInput
        label={startLabel || "Start date"}
        name={`${name}-start`}
        selectsStart
        startDate={watch(`${name}-start`)}
        endDate={watch(`${name}-end`)}
        minDate={minDate || undefined}
        maxDate={maxDate || undefined}
      />
      <DateInput
        label={endLabel || "End date"}
        name={`${name}-end`}
        selectsEnd
        startDate={watch(`${name}-start`)}
        endDate={watch(`${name}-end`)}
        minDate={watch(`${name}-start`)}
        maxDate={maxDate || undefined}
      />
    </FormControl>
  );
};

export default DateRangeInput;
