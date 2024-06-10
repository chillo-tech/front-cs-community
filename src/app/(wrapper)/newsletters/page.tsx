"use client";
import { Analytics, Message } from "@/components";
import { Metadata } from "next";
import { ScaleLoader } from "react-spinners";
import { useNewsletters } from "./useNewsletters";

export const metadata: Metadata = {
  description: `Rejoignez la communauté de stagiaires et de professionnels passionnés du code.  Les ingénieurs font confiance à nos contenus !`,
  title: `Inscrivez vous à notre newsletter`,
  other : {
    "google-site-verification" : "5ij7RBrzrJ75qGCb97uEfP5KstFGm0Rinja0aCVbC4Q"
  }
};


const Home = () => {
  const { register, onSubmit, errors, mutation, resetAll } = useNewsletters();
  return (
    <>
      <div className="container px-5 py-5 ">
        <form
          onSubmit={onSubmit}
          className={
            "flex relative flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
          }
        >
          {mutation.isError || mutation.isSuccess ? (
            <Message
              isError={mutation.isError}
              isSuccess={mutation.isSuccess}
              reloadForm={resetAll}
            />
          ) : (
            <>
              {mutation.isLoading ? (
                <div className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
                  <ScaleLoader color="rgb(30,50,138)" />
                </div>
              ) : null}
              <div className="">
                <p className="mb-2 mt-2 font-black text-2xl">
                  Inscrivez vous à notre newsletter
                </p>
              </div>

              {/* nom */}
              <div className="flex flex-col text-xl">
                <label>Votre nom</label>

                <input
                  className="p-2 text-black rounded-md text-xl my-2"
                  {...register("firstName")}
                  type="text"
                  placeholder="Entrez votre nom"
                />
                <p className="text-rose-800">
                  {errors &&
                    errors.firstName &&
                    "Veuillez nous indiquer votre nom."}
                </p>
              </div>

              {/* prenom */}
              <div className="flex flex-col text-xl">
                <label>Votre prénom</label>

                <input
                  className="p-2 text-black rounded-md text-xl my-2"
                  {...register("lastName")}
                  type="text"
                  placeholder="Entrez votre prénom"
                />
                <p className="text-rose-800">
                  {errors &&
                    errors.lastName &&
                    "Veuillez nous indiquer votre prénom."}
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
                    "Veuillez nous indiquer votre email."}
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
      {process.env.NEXT_PUBLIC_NEWSLETTERS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_NEWSLETTERS_ANALYTICS} />
      )}
    </>
  );
};

export default Home;
