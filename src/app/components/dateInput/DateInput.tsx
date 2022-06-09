import React, { useState } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { useController, useFormContext } from "react-hook-form";
import InputLayout from "../inputLayout";
import "react-datepicker/dist/react-datepicker.css";

const DateInput: React.FC<
  {
    name: string;
    label: string;
    onChange?: (args: Date) => void;
  } & Omit<ReactDatePickerProps, "onChange" | "name">
> = ({ name, label, ...rest }) => {
  const [startDate, setStartDate] = useState(new Date());

  const { control } = useFormContext();

  const {
    field: { value, ref },
  } = useController({
    control,
    name,
  });

  return (
    <InputLayout name={name} label={label}>
      <DatePicker
        ref={ref}
        value={value}
        name={name}
        id={name}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat="MM-dd-yyyy"
        {...rest}
      />
    </InputLayout>
  );
};

export default DateInput;
