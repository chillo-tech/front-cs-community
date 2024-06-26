import React from "react";
import { SubmitButton } from ".";

const DEFAULT_ERROR_MESSAGE = `Une erreur s'est produite. Merci de nous contacter en cliquant
sur le boutton whatsapp en bas à votre gauche.`;
const DEFAULT_SUCCESS_MESSAGE = `Votre requete a bien été prise en compte, vous serez notifié par
mail`;

const Message = ({
  isError,
  errorMessage = DEFAULT_ERROR_MESSAGE,
  isSuccess,
  successMessage = DEFAULT_SUCCESS_MESSAGE,
  reloadForm,
  reloadText = "Recharger le formulaire",
}: {
  isError: boolean;
  errorMessage?: string;
  isSuccess: boolean;
  successMessage?: string;
  reloadForm?: Function;
  reloadText?: string;
}) => {
  const handleReload = () => {
    if (reloadForm) reloadForm();
  };
  return (
    <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
      <div
        className={`mb-2 text-2xl text-center mt-2 ${
          isError ? "text-rose-800" : "text-blue-900"
        }`}
      >
        <p className="mb-2 text-lg text-center mt-2 flex flex-col gap-2">
          {isError && errorMessage}
          {isSuccess && successMessage}
          {reloadForm && (
            <SubmitButton
              text={reloadText}
              type="button"
              onClick={handleReload}
            />
          )}
        </p>
      </div>
    </div>
  );
};

export { Message };
