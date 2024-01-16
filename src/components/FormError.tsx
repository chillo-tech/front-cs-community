import React from "react";
import { SubmitButton } from ".";

const Message = ({
  isError,
  errorMessage,
  isSuccess,
  successMessage,
  reloadForm,
  reloadText = "rechargez le formulaire",
}: {
  isError: boolean;
  errorMessage: string;
  isSuccess: boolean;
  successMessage: string;
  reloadForm: Function;
  reloadText?: string;
}) => {
  const handleReload = () => {
    reloadForm();
  };
  return (
    <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
      <div
        className={`mb-2 font-black text-2xl text-center mt-2 ${
          isError ? "text-rose-800" : "text-blue-900"
        }`}
      >
        <p className="mb-2 font-black text-lg text-center mt-2 flex flex-col gap-2">
          {isError && errorMessage}
          {isSuccess && successMessage}
          <SubmitButton
            text={reloadText}
            type="button"
            onClick={handleReload}
          />
        </p>
      </div>
    </div>
  );
};

export { Message };
