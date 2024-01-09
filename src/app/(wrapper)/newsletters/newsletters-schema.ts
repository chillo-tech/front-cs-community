import * as yup from "yup";

export const newslettersSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});
