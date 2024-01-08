"use client";
import { COUNTRIES_CODES, POSITIONS } from "@/utils";
import useSuggestion from "./useSuggestion";

function SuggestionEdit() {
  const { register, handleSuggestionSubmit, errors, mutation } =
    useSuggestion();

  return (
    <>
      <form
        onSubmit={handleSuggestionSubmit}
        className={
          "text-md flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 px-3 md:px-6 md:text-lg rounded-md text-blue-900"
        }
      >
        {mutation.isError ? (
          <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
            <p className="mb-2 font-black text-2xl text-center mt-2 text-rose-800">
              Quelque chose a mal tourne, vous pouvez nous contacter en cliquant
              sur le boutton whatsapp en bas a votre gauche.
            </p>
          </div>
        ) : mutation.isSuccess ? (
          <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
            <p className="mb-2 font-black text-2xl text-center mt-2 text-blue-900">
              Votre requete a bien ete prise en compte, vous serez notifies par
              mail
            </p>
          </div>
        ) : (
          <>
            <div className="">
              <p className="mb-2 font-black text-2xl mt-2">
                Quelles sont vos attentes pour cette video
              </p>
            </div>

            {/* titre */}
            <div className="flex flex-col">
              <label>Quel est le titre de votre vidéo</label>
              <input
                className="p-2 text-black rounded-md"
                type="text"
                placeholder="Titre idéal pour la vidéo"
                {...register("title")}
              />
              <p className="text-rose-800 text-sm">
                {errors?.title && "Veuillez entrer un titre"}
              </p>
            </div>

            {/* description */}
            <div className="flex flex-col">
              <label>{`Qu'attendez vous de voir dans cette vidéo`}</label>
              <textarea
                className="p-2 text-black rounded-md"
                placeholder="Entrez la description"
                {...register("description")}
                rows={3}
              />
              <p className="text-rose-800 text-sm">
                {errors?.description && "Veuillez entrer une description"}
              </p>
            </div>

            {/* tag */}
            <div className="flex flex-col">
              <label>Vous etes...</label>
              <select
                className="p-2 text-black rounded-md"
                {...register("author.tag")}
              >
                <option value="text-black">
                  Selectionnez ce qui vous represente le plus
                </option>
                {POSITIONS.map((tag, idx) => (
                  <option key={tag + idx} value={tag}>
                    {tag.toLowerCase()}
                  </option>
                ))}
              </select>
              <p className="text-rose-800 text-sm">
                {errors &&
                  errors.author &&
                  errors.author.tag &&
                  "Veuillez nous indiquer ce que vous etes."}
              </p>
            </div>

            {/* nom */}
            <div className="flex flex-col">
              <label>Votre nom</label>

              <input
                className="p-2 text-black rounded-md"
                {...register("author.name")}
                type="text"
                placeholder="Entrez votre nom"
              />
              <p className="text-rose-800 text-sm">
                {errors &&
                  errors.author &&
                  errors.author.name &&
                  "Veuillez nous indiquer notre nom."}
              </p>
            </div>

            {/* email */}
            <div className="flex flex-col">
              <label>Votre email</label>
              <input
                className="p-2 text-black rounded-md"
                type="email"
                {...register("author.email")}
                placeholder="Entrez votre email"
              />
              <p className="text-rose-800 text-sm">
                {errors &&
                  errors.author &&
                  errors.author.email &&
                  "Veuillez nous indiquer notre email."}
              </p>
            </div>

            {/* index telephonique */}
            <div className="flex flex-col">
              <label>Numéro de téléphone</label>
              <div className="flex items-center justify-center gap-2">
                <select
                  className="p-2 text-black rounded-md w-1/3"
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
                  className="p-2 text-black rounded-md w-2/3"
                  {...register("author.phone")}
                  type="number"
                  placeholder="Entrez votre numero"
                />
              </div>

              <p className="text-rose-800 text-sm">
                {errors &&
                  errors.author &&
                  errors.author.phoneIndex &&
                  "Veuillez nous indiquer votre pays."}
              </p>
              <p className="text-rose-800 text-sm">
                {errors &&
                  errors.author &&
                  errors.author.phone &&
                  "Veuillez nous indiquer votre téléphone."}
              </p>
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
    </>
  );
}

export default SuggestionEdit;
