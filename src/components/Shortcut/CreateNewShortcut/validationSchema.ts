import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1).required("Required!"),
  kbds: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.number(),
        name: Yup.string(),
      })
    )
    .min(1)
    .required("Required!"),
  appId: Yup.string(),
  groupName: Yup.string().min(1).required("Required!"),
  extensionLink: Yup.string(),
  modified: Yup.bool(),
});

export default validationSchema;
