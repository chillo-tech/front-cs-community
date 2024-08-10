"use client";

import { Analytics, Message, SubmitButton } from "@/components";
import { ScaleLoader } from "react-spinners";
import { useAttente } from "./useAttente";
import { COUNTRIES_CODES } from "@/utils";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
  } = useAttente();
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

        {viewQuery.status === "success" &&
          ((viewQuery.data && !Array.isArray(viewQuery.data)) ||
            (Array.isArray(viewQuery.data) && viewQuery.data.length > 0)) && (
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
                      améliorer.
                    </p>
                  </div>

                  {/* nom */}
                  <div className="flex flex-col">
                    <label>Votre nom</label>
                    <input
                      className="py-1 px-2 text-black rounded-md"
                      type="text"
                      {...register("firstName")}
                    />
                    <p className="text-rose-800 text-sm">
                      {errors &&
                        errors.firstName &&
                        "Veuillez entrer votre nom"}
                    </p>
                  </div>

                  {/* prenom */}
                  <div className="flex flex-col">
                    <label>Votre nom</label>
                    <input
                      className="py-1 px-2 text-black rounded-md"
                      type="text"
                      {...register("lastName")}
                    />
                    <p className="text-rose-800 text-sm">
                      {errors && errors.lastName && "Veuillez entrer votre nom"}
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

                  {/* index telephonique */}
                  <div className="flex flex-col">
                    <label>
                      Numéro de téléphone{" "}
                      <span className="italic text-sm">
                        (Ce champ est optionnel)
                      </span>
                    </label>
                    <div className="flex md:items-center justify-center gap-2 flex-col md:flex-row">
                      <select
                        className="px-2 py-1 text-black rounded-md h-[36px] md:w-1/3 max-w-[90vw] md:max-w-full"
                        {...register("phoneIndex")}
                      >
                        <option value="">Votre pays</option>
                        {COUNTRIES_CODES.map(
                          ({ name, dial_code, code }, idx) => (
                            <option
                              {...{ code }}
                              key={`${code}-${idx}`}
                              value={dial_code}
                            >
                              {`${name} (${dial_code})`}
                            </option>
                          )
                        )}
                      </select>
                      <input
                        className="px-2 py-1 text-black rounded-md md:w-2/3"
                        {...register("phone")}
                        type="number"
                        placeholder="Entrez votre numéro"
                      />
                    </div>
                  </div>

                  {/* message */}
                  <div className="flex flex-col">
                    <label>Votre message</label>
                    <textarea
                      className="py-1 px-2 text-black rounded-md"
                      {...register("message")}
                      rows={4}
                    />
                    <p className="text-rose-800 text-sm">
                      {errors &&
                        errors.message &&
                        "Veuillez entrer votre message"}
                    </p>
                  </div>

                  <div className="flex flex-col text-xl my-3">
                    <SubmitButton text="Transmettre" />
                  </div>
                  <p className="text-center">
                    Nous ne traitons les données recueillies que pour faciliter
                    la prise de contact.
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
