import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

const SubmitButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default SubmitButton;
