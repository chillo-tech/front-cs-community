import * as yup from "yup";

export const waitingListSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
});
