"use client";
import React, { useContext, useEffect } from "react";
import { HomeContext } from "../layout";
import styles from "./page.module.scss";
import { useFn, useHome } from "./lib/hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const Home = () => {
  useHome();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container min-w-full px-5 py-5 grid grid-cols-1 gap-4 md:grid-cols-2 bg-gradient-to-r to-slate-100 via-purple-50 from-blue-100">
        <header className="text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col">
          <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">
            Enregistrez vous à nos newsletters
          </h2>
          <p className="mb-3 text-bold md:my-7 text-xl md:text-left">
            Sentez vous libre de remplir ce formulaire, et nous vous tiendrons
            au courant de toutes les nouveautes
          </p>
        </header>
        <MainForm />
      </div>
    </QueryClientProvider>
  );
};

export default Home;

const MainForm = () => {
  const { onSubmit, errors, register } = useFn();
  return (
    <form
      onSubmit={onSubmit}
      className={
        "infos bg-slate-200 py-8 rounded-md px-3 md:px-10 md:text-lg grid gap-4 "
      }
    >
      <div className="text-left mb-3 font-extralight col-span-full">
        <p className="mb-2 font-extrabold text-blue-900 text-2xl mt-2">
          Entrez vos informations ici
        </p>
        <p>
          Soyez rassurés, nous nous efforcerons de toujours vous tenir informés<br/>
          Et à chaques nouveautés biensur...
        </p>
      </div>

      {/* nom */}
      <div className={styles.inputLarge + " " + styles.formControl}>
        <label>Votre nom</label>

        <input
          {...register("nom")}
          type="text"
          placeholder="Entrez votre nom"
        />
        <p className={styles.errorMessage}>
          {errors?.nom && "Veuillez entrer votre nom"}
        </p>
      </div>

      {/* email */}
      <div className={styles.inputLarge + " " + styles.formControl}>
        <label>Votre email</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Entrez votre email"
        />
        <p className={styles.errorMessage}>
          {errors?.email && "Veuillez entrer votre email"}
        </p>
      </div>

      <button
        type="submit"
        className={
          styles.submitButton +
          " text-center flex mx-auto h-fit py-2 mt-1 justify-items-center items-center bg-blue-600 shadow-sm rounded-lg px-4 md:w-full w-fit"
        }
      >
        <span className="font-extralight text-xl text-white ">Transmettre</span>
      </button>
    </form>
  );
};
