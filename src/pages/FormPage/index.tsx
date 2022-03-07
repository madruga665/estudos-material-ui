import { TextField, Button } from "@mui/material";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { FormPageContainer } from "./styles";
import Formik from "../../hooks/Formik";
import Dropdown from "../../components/Dropdown";

const FormPage = () => {
  const {
    formik: { errors, touched, values, handleSubmit, handleChange },
  } = Formik();

  return (
    <FormPageContainer>
      <Header pageTitle='Formulário' />
      <Form handleSubmit={handleSubmit}>
        <TextField
          variant='standard'
          margin='normal'
          error={errors.name && touched.name ? true : false}
          helperText={errors.name && touched.name ? errors.name : null}
          id='name'
          label='Nome'
          value={values.name}
          onChange={handleChange}
        />
        <TextField
          variant='standard'
          margin='normal'
          error={errors.email && touched.email ? true : false}
          helperText={errors.email && touched.email ? errors.email : null}
          id='email'
          label='Email'
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          variant='standard'
          margin='normal'
          error={errors.phone && touched.phone ? true : false}
          helperText={errors.phone && touched.phone ? errors.phone : null}
          id='phone'
          label='Telefone'
          value={values.phone}
          onChange={handleChange}
        />
        <TextField
          variant='standard'
          margin='normal'
          error={errors.address && touched.address ? true : false}
          helperText={errors.address && touched.address ? errors.address : null}
          id='address'
          label='Endereço'
          value={values.address}
          onChange={handleChange}
        />
        <Dropdown />
        <Button sx={{ marginTop: "5rem" }} type='submit' variant='contained'>
          Enviar
        </Button>
      </Form>
      <Footer />
    </FormPageContainer>
  );
};

export default FormPage;
