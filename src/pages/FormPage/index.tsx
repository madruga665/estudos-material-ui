import { TextField, Button } from "@mui/material";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { FormPageContainer } from "./styles";
import Formik from "../../hooks/Formik";

const FormPage = () => {
  const { formik } = Formik();

  return (
    <FormPageContainer>
      <Header pageTitle='Formulário' />
      <Form handleSubmit={formik.handleSubmit}>
        <TextField
          error={formik.errors.name && formik.touched.name ? true : false}
          helperText={formik.errors.name && formik.touched.name ? formik.errors.name : null}
          margin='normal'
          id='name'
          label='Nome'
          variant='standard'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.errors.email && formik.touched.email ? true : false}
          helperText={formik.errors.email && formik.touched.email ? formik.errors.email : null}
          margin='normal'
          id='email'
          label='Email'
          variant='standard'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.errors.phone && formik.touched.phone ? true : false}
          helperText={formik.errors.phone && formik.touched.phone ? formik.errors.phone : null}
          margin='normal'
          id='phone'
          label='Telefone'
          variant='standard'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.errors.address && formik.touched.address ? true : false}
          helperText={formik.errors.address && formik.touched.address ? formik.errors.address : null}
          margin='normal'
          id='address'
          label='Endereço'
          variant='standard'
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        <Button sx={{ marginTop: "5rem" }} type='submit' variant='contained'>
          Enviar
        </Button>
      </Form>
      <Footer />
    </FormPageContainer>
  );
};

export default FormPage;
