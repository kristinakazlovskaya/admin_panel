import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("This is required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Must be a valid email"),
    password: yup.string().required("This is required"),
  })
  .required();

export default schema;
