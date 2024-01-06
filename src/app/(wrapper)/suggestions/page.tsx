"use client";
import { COUNTRIES_CODES, POSITIONS } from "@/utils";
import useSuggestion from "./useSuggestion";

function SuggestionEdit() {
  const { register, handleSuggestionSubmit, errors, submissionMessage } =
    useSuggestion();

  return (
    <div className="container px-5 py-5 ">
      {submissionMessage.canShow ? (
        <div className="flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100">
          <p
            className={`mb-2 font-black text-2xl text-center mt-2 ${
              submissionMessage.variant === "success"
                ? "text-slate-100"
                : "text-rose-800"
            }`}
          >
            {submissionMessage.message}
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSuggestionSubmit}
          className={
            "flex flex-col gap-2 font-light infos  py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-slate-100"
          }
        >
          <div className="">
            <p className="mb-2 font-black text-2xl text-center mt-2">
              Quelles sont vos attentes pour cette video
            </p>
            <p>
              Nous voulons que cette video vous soit bénéfique. En quelques
              mots, quelles sont vos attentes pour cette video
            </p>
          </div>

          {/* titre */}
          <div className="flex flex-col text-xl">
            <label>Quel est le titre de votre vidéo</label>
            <input
              className="p-2 text-black rounded-md text-xl my-2"
              type="text"
              placeholder="Titre idéal pour la vidéo"
              {...register("title")}
            />
            <p className="text-rose-800">
              {errors?.title && "Veuillez entrer un titre"}
            </p>
          </div>

          {/* description */}
          <div className="flex flex-col text-xl">
            <label>{`Qu'attendez vous de voir dans cette vidéo`}</label>
            <textarea
              className="p-2 text-black rounded-md text-xl my-2"
              placeholder="Entrez la description"
              {...register("description")}
              rows={4}
            />
            <p className="text-rose-800">
              {errors?.description && "Veuillez entrer une description"}
            </p>
          </div>

          {/* tag */}
          <div className="flex flex-col text-xl">
            <label>Vous etes...</label>
            <select
              className="p-2 text-black rounded-md text-xl my-2"
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
            <p className="text-rose-800">
              {errors &&
                errors.author &&
                errors.author.tag &&
                "Veuillez nous indiquer ce que vous etes."}
            </p>
          </div>

          {/* nom */}
          <div className="flex flex-col text-xl">
            <label>Votre nom</label>

            <input
              className="p-2 text-black rounded-md text-xl my-2"
              {...register("author.name")}
              type="text"
              placeholder="Entrez votre nom"
            />
            <p className="text-rose-800">
              {errors &&
                errors.author &&
                errors.author.name &&
                "Veuillez nous indiquer notre nom."}
            </p>
          </div>

          {/* email */}
          <div className="flex flex-col text-xl">
            <label>Votre email</label>
            <input
              className="p-2 text-black rounded-md text-xl my-2"
              type="email"
              {...register("author.email")}
              placeholder="Entrez votre email"
            />
            <p className="text-rose-800">
              {errors &&
                errors.author &&
                errors.author.email &&
                "Veuillez nous indiquer notre email."}
            </p>
          </div>

          {/* index telephonique */}
          <div className="flex flex-col text-xl">
            <label>Votre pays</label>
            <select
              className="p-2 text-black rounded-md text-xl my-2"
              {...register("author.phoneIndex")}
            >
              <option value="">Votre pays</option>
              {COUNTRIES_CODES.map(({ name, dial_code, code }, idx) => (
                <option {...{ code }} key={`${code}-${idx}`} value={dial_code}>
                  {`${name} (${dial_code})`}
                </option>
              ))}
            </select>
            <p className="text-rose-800">
              {errors &&
                errors.author &&
                errors.author.phoneIndex &&
                "Veuillez nous indiquer votre pays."}
            </p>
          </div>

          {/* numero de telephone */}
          <div className="flex flex-col text-xl">
            <label>Numéro de téléphone</label>
            <input
              className="p-2 text-black rounded-md mt-3 text-xl"
              {...register("author.phone")}
              type="number"
              placeholder="Entrez votre numero"
            />
            <p className="text-rose-800">
              {errors &&
                errors.author &&
                errors.author.phone &&
                "Veuillez nous indiquer votre téléphone."}
            </p>
          </div>

          <div className="flex flex-col text-xl my-3">
            <button
              type="submit"
              className={
                "text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
              }
            >
              <span className="font-extralight text-xl text-white ">
                Transmettre
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SuggestionEdit;
