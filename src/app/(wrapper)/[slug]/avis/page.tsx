"use client";

import {
  AvisFormInputWrapper,
  CustomCheckbox,
  Message,
  SubmitButton,
} from "@/components";
import { RADIO_NOTES } from "./constants";
import { useAvis } from "./useAvis";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    setSelectedFactory,
    selected,
    viewQuery,
    resetAll,
    reloadPage,
  } = useAvis();
  return (
    <div className="container px-5 py-5 ">
      {(viewQuery.status === "loading" || viewQuery.status === "error") && (
        <div
          className={
            " bg-slate-200 py-3 px-3 md:px-10 md:text-lg rounded-md text-blue-900"
          }
        >
          {viewQuery.status === "loading" ? (
            <Message
              isError={false}
              isSuccess={true}
              successMessage="Chargement du formulaire..."
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
            "flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
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
              <div className="">
                <p className="mb-2 font-black text-2xl mt-2">
                  Merci de nous donner votre avis
                </p>
                <p>
                  Les évaluations nous permmettent de constament nous améliorer.
                  Globalement vous êtes ...
                </p>
              </div>

              {/* radios */}
              <div className="grid gap-2 xl:grid-cols-3 mmd:grid-cols-2 grid-cols-1 xsm:grid-cols-2">
                {RADIO_NOTES.map((choice, j) => {
                  return (
                    <CustomCheckbox
                      name="note"
                      id={`checkbox-note-${j}`}
                      index={j}
                      key={`checkbox-note-${j}`}
                      label={choice.label}
                      selected={selected}
                      value={choice.value}
                      setSelected={setSelectedFactory(j)}
                      register={register}
                    />
                  );
                })}
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
                  {errors && errors.message && "Veuillez entrer votre message"}
                </p>
              </div>

              <div className="flex flex-col text-xl my-3">
                <SubmitButton text="Transmettre" />
              </div>
              <p className="text-center">
                {viewQuery.data?.view.right?.bottom}
              </p>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default Home;
