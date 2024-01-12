import React from "react";

const FormSubmitResponder = ({
  isError,
  errorMessage,
  isSuccess,
  successMessage,
}: {
  isError: boolean;
  errorMessage: string;
  isSuccess: boolean;
  successMessage: string;
}) => {
  return (
    <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
      <div
        className={`mb-2 font-black text-2xl text-center mt-2 ${
          isError ? "text-rose-800" : "text-blue-900"
        }`}
      >
        <p className="mb-2 font-black text-lg text-center mt-2 ">
          {isError && errorMessage}
          {isSuccess && successMessage}
        </p>
      </div>
    </div>
  );
};

export { FormSubmitResponder };
