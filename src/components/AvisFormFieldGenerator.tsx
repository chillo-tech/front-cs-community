import { avisFieldSwitcher } from "@/utils";
import { AvisFormInputWrapper } from ".";

const AvisFormFieldGenerator = ({
  fields,
  errors,
  register,
  selected,
  setSelectedFactory,
}: {
  fields?: {
    name: string;
    fieldType: string;
    label: string;
    placeholder?: string | undefined;
    choices?: string[] | undefined;
  }[];
  errors: any;
  setSelectedFactory: (i: number) => () => void;
  register: Function;
  selected?: number | null;
}) => {
  return fields?.map((el, i) => {
    return (
      <AvisFormInputWrapper
        key={i}
        errors={errors}
        label={el.label}
        name={el.name}
      >
        {avisFieldSwitcher({ i, setSelectedFactory, el, register, selected })}
      </AvisFormInputWrapper>
    );
  });
};

export { AvisFormFieldGenerator };
