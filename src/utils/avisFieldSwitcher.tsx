import { CustomCheckbox } from "@/components";

const avisFieldSwitcher = ({
  i,
  setSelectedFactory,
  selected,
  register,
  el,
}: {
  setSelectedFactory: (i: number) => () => void;
  selected?: number | null;
  i: number;
  register: Function;
  el: {
    name: string;
    fieldType: string;
    label: string;
    placeholder?: string | undefined;
    choices?: string[] | undefined;
  };
}) => {
  switch (el.fieldType) {
    case "text":
    case "email":
      return (
        <input
          className="p-2 text-black rounded-md text-xl my-2"
          // @ts-ignore
          {...register(el.name)}
          type={el.fieldType}
          placeholder={el.placeholder}
        />
      );
    case "textarea":
      return (
        <textarea
          className="p-2 text-black rounded-md text-xl my-2"
          // @ts-ignore
          {...register(el.name)}
          rows={4}
          placeholder={el.placeholder}
        />
      );
    case "checkbox":
      return (
        <div className="flex">
          {el.choices?.map((choice, j) => {
            return (
              <CustomCheckbox
                name={el.name}
                id={`checkbox${el.name}${i}-${j}`}
                index={j}
                key={`${i} - ${j}`}
                label={choice}
                selected={selected}
                value={choice}
                setSelected={setSelectedFactory(j)}
                register={register}
              />
            );
          })}
        </div>
      );
    default:
      return null;
  }
};

export { avisFieldSwitcher };
