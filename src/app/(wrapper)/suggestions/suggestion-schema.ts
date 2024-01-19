import { POSITIONS_VALUES } from "@/utils/data";
import * as yup from "yup";

const suggestionSchema = yup.object().shape({
  author: yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneIndex: yup.number().min(1).max(9999).optional(),
    phone: yup.number().min(1).optional(),
    tag: yup.string().oneOf(POSITIONS_VALUES).required(),
  }),
  description: yup.string().required(),
  title: yup.string().required(),
});

export { suggestionSchema };
