import * as yup from "yup";

export const avisSchema = yup.object().shape({
  subject: yup.string().nullable().optional(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  note: yup.string().optional().nullable(),
  message: yup.string().required(),
});
