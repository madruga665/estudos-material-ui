import React from "react";
import { FormContainer } from "./styles";

interface IFormProps {
  children: React.ReactNode;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({children, handleSubmit}: IFormProps) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      {children}
    </FormContainer>
  );
};

export default Form;
