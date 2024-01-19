"use client";
import { AvisFormInputWrapper, Message } from "@/components";
import { FormTextInput } from "@/components/FormInput";
import { COUNTRIES_CODES, POSITIONS } from "@/utils";
import useSuggestion from "./useSuggestion";

function SuggestionEdit() {
  const { register, handleSuggestionSubmit, errors, mutation, resetAll } =
    useSuggestion();

  return (
    <form
      className={
        "flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900 "
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
          <div className="">
            <p className="mb-2 font-black text-2xl mt-2">
              Quelles sont vos attentes pour cette video
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
            label="Vous etes..."
            name="tag"
          >
            <select
              className="p-2 text-black rounded-md"
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
            <label>Numéro de téléphone</label>
            <div className="flex items-center justify-center gap-2">
              <select
                className="px-2 py-1 text-black rounded-md w-1/3"
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
                className="px-2 py-1 text-black rounded-md w-2/3"
                {...register("author.phone")}
                type="number"
                placeholder="Entrez votre numero"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-rose-800 text-sm w-1/3">
                {errors &&
                  errors.author &&
                  errors.author.phoneIndex &&
                  "Veuillez nous indiquer votre pays."}
              </p>
              <p className="text-rose-800 text-sm w-2/3">
                {errors &&
                  errors.author &&
                  errors.author.phone &&
                  "Veuillez nous indiquer votre téléphone."}
              </p>
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
  );
}

export default SuggestionEdit;
