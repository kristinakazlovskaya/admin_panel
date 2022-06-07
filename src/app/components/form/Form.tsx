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
  defaultValues?: Record<string, any>;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  validationSchema,
  defaultValues,
  children,
}) => {
  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  React.useEffect(() => {
    const values = methods.getValues();
    const firstValue = Object.keys(values)[0];
    methods.setFocus(firstValue);
  }, [methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
