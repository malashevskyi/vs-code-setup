import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  newGroupName: Yup.string().min(1).required("Required!"),
});

export default validationSchema;
