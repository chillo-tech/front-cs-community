import * as yup from "yup";

export const avisSchema = yup.object().shape({
  subject: yup.string().required(),
  email: yup.string().email().required(),
  impression: yup.string().required(),
  message: yup.string().required(),
});
