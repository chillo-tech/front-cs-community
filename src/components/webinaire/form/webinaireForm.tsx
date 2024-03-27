import formStyles from "@/styles/Form.module.css";
import styles from "@/styles/SignIn.module.css";
import { IWebinaireFormulaire } from "@/types/WebinaireFields";
import Link from "next/link";
import { useContext } from "react";
import FormActionsButtons from "./FormActionsButtons";
import { context } from "./context";
import { Pages } from "./pages";
import { ScaleLoader } from "react-spinners";

const WebinaireForm = ({ formView }: { formView: IWebinaireFormulaire }) => {
  const { mutation, handleSubmitFn, errorMessage, formPageIndex } =
    useContext(context);

  return (
    <article
      className={`${styles.inputs__container} !h-fit !w-full !overflow-y-hidden relative`}
    >
      {mutation.isLoading && (
            <div className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
              <ScaleLoader color="rgb(30,50,138)" />
            </div>
          )}
      {mutation.isError ? (
        <h2 className={`text-center text-lg text-rose-500`}>{errorMessage}</h2>
      ) : null}
      {mutation.isSuccess ? (
        <>
          <p className="text-light text-center text-2xl text-blue-900">
            Nous sommes heureux de pouvoir compter sur votre présence à notre
            webinaire!
          </p>
          <p className="p-4 text-center text-lg">A très vite | Chillo tech</p>
          <button type="button" className={formStyles.form_control__button}>
            <Link href="https://chillo.tech">Retourner à l'acceuil</Link>
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmitFn} className="">
          
          <header className="mb-4 space-y-2">
            <h3 className="text-center text-xl lg:text-left">
              {formView.titre}
            </h3>
            <h4 className="text-center font-light lg:text-left">
              {formView.description}
            </h4>
          </header>
          {Pages[formPageIndex]()}

          <FormActionsButtons />
          <footer className="my-3">
            <p className="text-center text-sm ">{formView.pied_de_page}</p>
          </footer>
        </form>
      )}
    </article>
  );
};

export default WebinaireForm;
