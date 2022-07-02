import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is not correct!").required("Required!"),
  password: Yup.string().required("Required!"),
});

export default validationSchema;
