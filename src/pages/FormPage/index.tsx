import { TextField, Button } from "@mui/material";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import { FormPageContainer } from "./styles";

const FormPage = () => {
  const { name, email, phone, address, handleSubmit, setName, setAddress, setEmail, setPhone } = useForm();

  return (
    <FormPageContainer>
      <Header pageTitle='Formulário' />
      <Form handleSubmit={handleSubmit}>
        <TextField
          id='name'
          label='Nome'
          variant='standard'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id='email'
          label='Email'
          variant='standard'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id='phone'
          label='Telefone'
          variant='standard'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          id='address'
          label='Endereço'
          variant='standard'
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <Button type='submit' variant='contained'>
          Enviar
        </Button>
      </Form>
      <Footer />
    </FormPageContainer>
  );
};

export default FormPage;
