"use client";
import { Message } from "@/components";
import { useNewsletters } from "./useNewsletters";

const Home = () => {
  const { register, onSubmit, errors, mutation, resetAll } = useNewsletters();
  return (
    <div className="container px-5 py-5 ">
      <form
        onSubmit={onSubmit}
        className={
          "flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
        }
      >
        {mutation.isError || mutation.isSuccess ? (
          <Message
            errorMessage={`Quelque chose a mal tourne, vous pouvez nous contacter en cliquant
              sur le boutton whatsapp en bas a votre gauche.`}
            isError={mutation.isError}
            isSuccess={mutation.isSuccess}
            reloadForm={resetAll}
            successMessage={`Votre requete a bien ete prise en compte, vous serez notifies par
              mail`}
          />
        ) : (
          <>
            <div className="">
              <p className="mb-2 font-black text-2xl text-center mt-2">
                Quelles sont vos attentes pour cette video
              </p>
              <p>
                Nous voulons que cette video vous soit bénéfique. En quelques
                mots, quelles sont vos attentes pour cette video
              </p>
            </div>

            {/* nom */}
            <div className="flex flex-col text-xl">
              <label>Votre nom</label>

              <input
                className="p-2 text-black rounded-md text-xl my-2"
                {...register("name")}
                type="text"
                placeholder="Entrez votre nom"
              />
              <p className="text-rose-800">
                {errors && errors.name && "Veuillez nous indiquer notre nom."}
              </p>
            </div>

            {/* email */}
            <div className="flex flex-col text-xl">
              <label>Votre email</label>
              <input
                className="p-2 text-black rounded-md text-xl my-2"
                type="email"
                {...register("email")}
                placeholder="Entrez votre email"
              />
              <p className="text-rose-800">
                {errors &&
                  errors.email &&
                  "Veuillez nous indiquer notre email."}
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
          </>
        )}
      </form>
    </div>
  );
};

export default Home;
