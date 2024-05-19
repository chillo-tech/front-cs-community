"use client";

import { Analytics, CustomCheckbox, Message, SubmitButton } from "@/components";
import { ScaleLoader } from "react-spinners";
import { RADIO_NOTES } from "./constants";
import { useAvis } from "./useAvis";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    note,
    viewQuery,
    resetAll,
    reloadPage,
  } = useAvis();
  return (
    <>
      <div className="container px-5 py-5 ">
        {(viewQuery.isLoading || viewQuery.status === "error") && (
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

        {viewQuery.status === "success" ? (
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
                </div>
                {viewQuery.data ? (
                  <>
                    <p>
                      Les évaluations nous permmettent de constament nous
                      améliorer. Globalement vous êtes ...
                    </p>
                    {/* radios */}
                    <div className="grid gap-2">
                      {RADIO_NOTES.map((choice, j) => {
                        return (
                          <CustomCheckbox
                            activeColor={choice.activeColor}
                            name="note"
                            id={`checkbox-note-${j}`}
                            key={`checkbox-note-${j}`}
                            label={choice.label}
                            note={note}
                            value={choice.value}
                            register={register}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    {/* subject */}
                    <div className="flex flex-col">
                      <label>Sujet</label>
                      <input
                        className="py-1 px-2 text-black rounded-md"
                        type="text"
                        {...register("subject")}
                      />
                      <p className="text-rose-800 text-sm">
                        {errors &&
                          errors.subject &&
                          "Veuillez entrer votre sujet"}
                      </p>
                    </div>
                  </>
                )}

                {/* nom */}
                <div className="flex flex-col">
                  <label>Votre nom</label>
                  <input
                    className="py-1 px-2 text-black rounded-md"
                    type="text"
                    {...register("firstName")}
                  />
                  <p className="text-rose-800 text-sm">
                    {errors && errors.firstName && "Veuillez entrer votre nom"}
                  </p>
                </div>

                {/* prenom */}
                <div className="flex flex-col">
                  <label>Votre prénom</label>
                  <input
                    className="py-1 px-2 text-black rounded-md"
                    type="text"
                    {...register("lastName")}
                  />
                  <p className="text-rose-800 text-sm">
                    {errors &&
                      errors.firstName &&
                      "Veuillez entrer votre prénom"}
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
                  Nous ne traitons les données recueillies que pour faciliter la
                  prise de contact.
                </p>
              </>
            )}
          </form>
        ) : null}
      </div>
      {process.env.NEXT_PUBLIC_AVIS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_AVIS_ANALYTICS} />
      )}
    </>
  );
};

export default Home;
