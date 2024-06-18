import * as yup from "yup";

export const attenteSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  phone: yup.string(),
  phoneIndex: yup.string(),
  message: yup.string().required(),
});
