import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";

interface FormProps {
  onSubmit: SubmitHandler<FieldValues>;
  validationSchema: AnyObjectSchema;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  validationSchema,
  children,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
