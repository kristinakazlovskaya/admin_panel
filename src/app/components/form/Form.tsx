import React from "react";

interface FormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ onSubmit, children, ...rest }) => {
  return (
    <form onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
};

export default Form;
