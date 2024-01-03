import * as yup from "yup";

export const formSchema = yup.object().shape({
  nom: yup.string().required(),
  email: yup.string().email().required(),
});
