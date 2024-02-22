"use client";

import { Analytics, Message, SubmitButton } from "@/components";
import { ScaleLoader } from "react-spinners";
import { useWaitingList } from "./useWaitingList";
import { isAxiosError } from "axios";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
    backToHome,
  } = useWaitingList();
  return (
    <>
      <div className="container px-5 py-5 ">
        {(viewQuery.status === "loading" || viewQuery.status === "error") && (
          <div
            className={
              " bg-slate-200 py-3 px-3 md:px-10 md:text-lg rounded-md text-blue-900"
            }
          >
            {viewQuery.status === "loading" ? (
              <div className="flex top-0 left-0 z-50 justify-center items-center h-full w-full">
                <ScaleLoader color="rgb(30,50,138)" />
              </div>
            ) : isAxiosError(viewQuery.error) &&
              viewQuery.error.response?.data.description ===
                "Path: query > id - Invalid uuid" ? (
              <Message
                isError={true}
                isSuccess={false}
                errorMessage={`La formation que vous cherchez n'existe pas.`}
                reloadForm={backToHome}
                reloadText="Retourner à la page d'acceuil"
              />
            ) : (
              <Message
                isError={true}
                isSuccess={false}
                reloadForm={reloadPage}
                reloadText="Recharger la page"
              />
            )}
          </div>
        )}

        {viewQuery.status === "success" && (
          <form
            className={
              "flex relative flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
            }
            onSubmit={onSubmit}
          >
            {mutation.isError || mutation.isSuccess ? (
              <Message
                reloadForm={resetAll}
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
              />
            ) : (
              <>
                {mutation.isLoading ? (
                  <div className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
                    <ScaleLoader color="rgb(30,50,138)" />
                  </div>
                ) : null}
                <div className="">
                  <p className="mb-2 font-black text-2xl mt-2">
                    Merci de nous donner votre avis
                  </p>
                  <p>
                    Les évaluations nous permmettent de constament nous
                    améliorer. Globalement vous êtes ...
                  </p>
                </div>

                {/* nom */}
                <div className="flex flex-col">
                  <label>Votre nom</label>
                  <input
                    className="py-1 px-2 text-black rounded-md"
                    type="text"
                    {...register("name")}
                  />
                  <p className="text-rose-800 text-sm">
                    {errors && errors.name && "Veuillez entrer votre nom"}
                  </p>
                </div>

                {/* email */}
                <div className="flex flex-col">
                  <label>Votre email</label>
                  <input
                    className="py-1 px-2 text-black rounded-md"
                    type="email"
                    {...register("email")}
                  />
                  <p className="text-rose-800 text-sm">
                    {errors && errors.email && "Veuillez entrer votre email"}
                  </p>
                </div>

                <div className="flex flex-col text-xl my-3">
                  <SubmitButton
                    text={"Rejoignez la liste d'attente".toUpperCase()}
                  />
                </div>
                <p className="text-center">
                  Nous respectons votre vie privée. Désabonnez-vous à tout
                  moment.
                </p>
              </>
            )}
          </form>
        )}
      </div>
      {process.env.NEXT_PUBLIC_AVIS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_AVIS_ANALYTICS} />
      )}
    </>
  );
};

export default Home;
