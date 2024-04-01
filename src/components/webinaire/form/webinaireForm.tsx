import formStyles from "@/styles/Form.module.css";
import styles from "@/styles/SignIn.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ScaleLoader } from "react-spinners";
import FormActionsButtons from "./FormActionsButtons";
import { context } from "@/context/WebinaireContext";
import { Pages } from "./pages";
import { IWebinaireView } from "@/types";
import { getHumanDate } from "@/utils";

const WebinaireForm = ({ data }: { data?: IWebinaireView }) => {
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
            <Link href="https://chillo.tech">Retourner à l&apos;acceuil</Link>
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmitFn} className="">
          <header className="mb-4 space-y-2">
            <h3 className="text-md lg:text-left">
              Inscrivez vous à <br />
              <span className="uppercase text-2xl text-bold">{data?.title}</span>
            </h3>

            <h4 className="font-light lg:text-left">
              Le webinaire débutera le{" "}
              <span className="font-semibold">
                {getHumanDate(
                  new Date(data?.plannings.at(-1)?.startDate || "")
                )}{" "}
                à {data?.plannings.at(-1)?.startHour.slice(0, -3) || ""}
              </span>{" "}
              <br />
              et prendra fin le{" "}
              <span className="font-semibold">
                {getHumanDate(new Date(data?.plannings.at(-1)?.endDate || ""))}{" "}
                à {data?.plannings.at(-1)?.endHour.slice(0, -3) || ""}
              </span>
            </h4>
          </header>
          {Pages[formPageIndex]()}

          <FormActionsButtons />
          <footer className="my-3">
            <p className="text-center text-sm ">
              {/* {formView.pied_de_page} */}
            </p>
          </footer>
        </form>
      )}
    </article>
  );
};

export default WebinaireForm;
