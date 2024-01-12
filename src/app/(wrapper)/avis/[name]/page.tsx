"use client";

import { AvisFormFieldGenerator } from "@/components";
import { useAvis } from "./useAvis";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    form,
    setSelectedFactory,
    selected,
  } = useAvis();
  return (
    <div className="container px-5 py-5 ">
      <form
        onSubmit={onSubmit}
        className={
          "flex flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md text-blue-900"
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
              <p className="mb-2 font-black text-2xl mt-2">{form?.title}</p>
              <p>{form?.desc}</p>
            </div>

            <AvisFormFieldGenerator
              errors={errors}
              fields={form?.fields}
              register={register}
              setSelectedFactory={setSelectedFactory}
              selected={selected}
            />

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
            <p className="text-center">{form?.bottom}</p>
          </>
        )}
      </form>
    </div>
  );
};

export default Home;
