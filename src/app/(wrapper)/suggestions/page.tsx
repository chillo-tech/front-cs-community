"use client";
import { Analytics, AvisFormInputWrapper, Message } from "@/components";
import { FormTextInput } from "@/components/FormInput";
import { COUNTRIES_CODES, POSITIONS } from "@/utils";
import useSuggestion from "./useSuggestion";
import { ScaleLoader } from "react-spinners";

function SuggestionEdit() {
  const { register, handleSuggestionSubmit, errors, mutation, resetAll } =
    useSuggestion();

  return (
    <>
      <form
        className={
          "flex relative flex-col gap-2 font-light mx-8 infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900 "
        }
        onSubmit={handleSuggestionSubmit}
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
                Quelles sont vos attentes pour cette vidéo
              </p>
            </div>

            {/* titre */}
            <FormTextInput
              label="Quel est le titre de votre vidéo"
              name="title"
              register={register}
              errors={errors}
              errorMessage="Veuillez entrer un titre"
              placeholder="Titre idéal pour la vidéo"
            />

            {/* description */}
            <FormTextInput
              label="Qu'attendez vous de voir dans cette vidéo"
              placeholder="Entrez la description"
              name="description"
              errorMessage="Veuillez entrer une description"
              type="textarea"
              register={register}
              errors={errors}
            />

            {/* tag */}
            <AvisFormInputWrapper
              errors={errors && errors.author}
              label="Vous êtes..."
              name="tag"
            >
              <select
                className="px-2 text-black rounded-md max-w-[90vw] h-[36px] md:max-w-full"
                {...register("author.tag")}
              >
                <option value="text-black">
                  Selectionnez ce qui vous represente le plus
                </option>
                {POSITIONS.map(({ value, label }, idx) => (
                  <option key={`${value}${idx}`} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </AvisFormInputWrapper>

            {/* nom */}
            <FormTextInput
              label="Votre nom"
              placeholder="Entrez votre nom"
              name="author.name"
              errorMessage="Veuillez entrer une description"
              register={register}
              errors={errors && errors.author}
              errorName="name"
            />

            {/* email */}
            <FormTextInput
              label="Votre email"
              placeholder="Entrez votre email"
              name="author.email"
              errorMessage="Veuillez nous indiquer notre email."
              register={register}
              errors={errors && errors.author}
              errorName="email"
            />

            {/* index telephonique */}
            <div className="flex flex-col">
              <label>
                Numéro de téléphone{" "}
                <span className="italic text-sm">(Ce champ est optionnel)</span>
              </label>
              <div className="flex md:items-center justify-center gap-2 flex-col md:flex-row">
                <select
                  className="px-2 py-1 text-black rounded-md h-[36px] md:w-1/3 max-w-[90vw] md:max-w-full"
                  {...register("author.phoneIndex")}
                >
                  <option value="">Votre pays</option>
                  {COUNTRIES_CODES.map(({ name, dial_code, code }, idx) => (
                    <option
                      {...{ code }}
                      key={`${code}-${idx}`}
                      value={dial_code}
                    >
                      {`${name} (${dial_code})`}
                    </option>
                  ))}
                </select>
                <input
                  className="px-2 py-1 text-black rounded-md md:w-2/3"
                  {...register("author.phone")}
                  type="number"
                  placeholder="Entrez votre numero"
                />
              </div>
            </div>
            <div className="flex flex-col my-3">
              <button
                type="submit"
                className={
                  "text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
                }
              >
                <span className="font-extralight text-white ">Transmettre</span>
              </button>
            </div>
          </>
        )}
      </form>
      {process.env.NEXT_PUBLIC_SUGGESTIONS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_SUGGESTIONS_ANALYTICS} />
      )}
    </>
  );
}

export default SuggestionEdit;
