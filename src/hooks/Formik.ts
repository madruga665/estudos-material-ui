import { useFormik } from "formik";
import { userSchema } from "../validate/userSchema";


const Formik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values , null, 2));
      console.log(values);
      formik.resetForm();
    },
    validationSchema: userSchema,
  });

  return {
    formik,
  };
};

export default Formik;
