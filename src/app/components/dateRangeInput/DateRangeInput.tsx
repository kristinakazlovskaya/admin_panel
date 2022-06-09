import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import DateInput from "../dateInput";

const DateRangeInput: React.FC<{
  startLabel?: string;
  endLabel?: string;
  minDate?: Date;
  maxDate?: Date;
  name: string;
  label: string;
}> = ({ startLabel, endLabel, name, label, minDate, maxDate, ...rest }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <FormControl as="fieldset">
      <FormLabel as="legend">{label}</FormLabel>
      <DateInput
        label={startLabel || "Start date"}
        name={`${name}-start`}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        selected={startDate}
        minDate={minDate || undefined}
        maxDate={maxDate || undefined}
        onChange={(date: Date) => setStartDate(date)}
        {...rest}
      />
      <DateInput
        label={endLabel || "End date"}
        name={`${name}-end`}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={maxDate || undefined}
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        {...rest}
      />
    </FormControl>
  );
};

export default DateRangeInput;
