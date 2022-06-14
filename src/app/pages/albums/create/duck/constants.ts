import * as yup from "yup";

const schema = yup
  .object({
    title: yup
      .string()
      .required("This is required")
      .min(3, "Must be at least 3 characters")
      .max(64, "Must be less than 64 characters"),
    user: yup.string().required("This is required"),
  })
  .required();

export default schema;
