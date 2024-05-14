import { POSITIONS_VALUES } from "@/utils/data";
import * as yup from "yup";

const suggestionSchema = yup.object().shape({
  author: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phoneIndex: yup.string().transform(transformToNull).nullable().optional(),
    phone: yup.string().transform(transformToNull).nullable().optional(),
    tag: yup.string().oneOf(POSITIONS_VALUES).required(),
  }),
  description: yup.string().required(),
  title: yup.string().required(),
});

export { suggestionSchema };

function transformToNull(value: any, originalValue: any) {
  if (!value) {
    return null;
  }
  return originalValue;
}
