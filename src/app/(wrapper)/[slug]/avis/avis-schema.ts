import * as yup from "yup";

export const avisSchema = yup.object().shape({
  nom: yup.string().required(),
  email: yup.string().email().required(),
  note: yup.string().required(),
  message: yup.string().required(),
});
