import { EMAIL_ERROR_MESSAGE, EMAIL_PATTERN } from "@/utils";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("Ce champ est requis"),
  lastName: yup.string().required("Ce champ est requis"),
  email: yup
    .string()
    .email(EMAIL_ERROR_MESSAGE)
    .required(EMAIL_ERROR_MESSAGE)
    .matches(EMAIL_PATTERN, { message: EMAIL_ERROR_MESSAGE }),
  phoneIndex: yup.string(),
  phoneNumber: yup.string(),
  newsletter: yup.boolean(),
  channel: yup.string(),
});

export { schema };
