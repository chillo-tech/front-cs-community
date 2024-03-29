import { ReactNode } from "react";

const AvisFormInputWrapper = (props: {
  label: string;
  name: string;
  errors: any;
  children: ReactNode;
}) => {
  const { label, name, errors, children } = props;
  return (
    <div className="flex flex-col text-lg">
      <label>{label}</label>
      {children}
      <p className="text-rose-800">
        {errors && errors[name] && `Veuillez nous indiquer votre ${name}.`}
      </p>
    </div>
  );
};

export { AvisFormInputWrapper };
