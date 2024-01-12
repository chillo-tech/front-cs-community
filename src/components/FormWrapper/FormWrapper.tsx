import React from "react";

const FormWrapper = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
  [p: string]: any;
}) => {
  return (
    <form
      className={
        "flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
      }
      {...rest}
    >
      {children}
    </form>
  );
};

export { FormWrapper };
