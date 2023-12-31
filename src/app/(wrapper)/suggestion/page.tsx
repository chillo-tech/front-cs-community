"use client";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFn, useHome } from "./lib/hooks";
import { phoneIndexes, tags } from "./lib/mockdata";
import styles from "./page.module.scss";

const queryClient = new QueryClient();

export default function Home() {
  useHome()
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {/* <NavBar /> */}

      <div className="container min-w-full px-5 py-5 grid grid-cols-1 gap-4 md:grid-cols-2 bg-gradient-to-r to-slate-100 via-purple-50 from-blue-100">
        <header className="text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col">
          <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">
            Avez vous une idee de video{" "}
          </h2>
          <p className="mb-3 text-bold md:my-7 text-xl md:text-left">
            Sentez vous libre de remplir ce formulaire, et je ferais de mon
            mieux pour creer une video a propos du sujet que vous proposez
          </p>
        </header>
        <MainForm />
      </div>
    </QueryClientProvider>
  );
}

const MainForm = () => {
  const { onSubmit, errors, register } = useFn();
  return (
    <form
      onSubmit={onSubmit}
      className={
        "infos bg-slate-200 py-3 rounded-md px-3 md:px-10 md:text-lg grid gap-4 grid-cols-2 " +
        styles.formContainer
      }
    >
      <div className="text-left mb-3 font-extralight col-span-full">
        <p className="mb-2 font-extrabold text-blue-900 text-2xl text-center mt-2">
          Quelles sont vos attentes pour cette video
        </p>
        <p>
          Nous voulons que cette video vous soit bénéfique. En quelques mots,
          quelles sont vos attentes pour cette video
        </p>
      </div>

      {/* titre */}
      <div className={styles.inputLarge + " " + styles.formControl}>
        <label>Quel est le titre de votre vidéo</label>
        <input
          type="text"
          placeholder="Titre idéal pour la vidéo"
          {...register("title")}
        />
        <p className={styles.errorMessage}>
          {errors?.title && "Veuillez entrer un titre"}
        </p>
      </div>

      {/* description */}
      <div className={styles.inputLarge + " " + styles.formControl}>
        <label>Qu'attendez vous de voir dans cette vidéo</label>
        <textarea
          placeholder="Entrez la description"
          {...register("description")}
          rows={4}
        />
        <p className={styles.errorMessage}>
          {errors?.description && "Veuillez entrer une description"}
        </p>
      </div>

      {/* tag */}
      <div className={styles.inputLarge + " " + styles.formControl}>
        <label>Vous etes...</label>
        <select {...register("tag")}>
          <option value={""}>
            Selectionnez ce qui vous represente le plus
          </option>
          {tags.map((tag, idx) => (
            <option key={tag + idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <p className={styles.errorMessage}>
          {errors?.tag && "Veuillez nous indiquer ce que vous etes."}
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

      {/* index telephonique */}
      <div className={styles.formControl}>
        <label>Votre pays</label>
        <select {...register("phoneIndex")}>
          {phoneIndexes.map((phoneIndex, idx) => (
            <option
              {...{ ["data-countrycode"]: phoneIndex["data-countrycode"] }}
              key={phoneIndex.value + phoneIndex["data-countrycode"] + idx}
              value={phoneIndex.value}
            >
              {phoneIndex.text}
            </option>
          ))}
        </select>
        <p className={styles.errorMessageBottom}>
          {errors?.phoneIndex && "Veuillez entrer Pays"}
        </p>
      </div>

      {/* numero de telephone */}
      <div className={styles.formControl}>
        <label>Numéro de téléphone</label>
        <input
          {...register("phone")}
          type="number"
          placeholder="Entrez votre numero"
        />
        <p className={styles.errorMessageBottom}>
          {errors?.phone && "Veuillez entrer numero de telephone"}
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
