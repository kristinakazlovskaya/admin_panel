import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const SubmitButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button isLoading={isSubmitting} {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
