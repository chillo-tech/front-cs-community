"use client";
import Link from "next/link";
import React from "react";
import { useHome } from "./useHome";

const Home = () => {
  useHome();

  return (
    <main>
      <section className="container mx-auto py-32 md:my-auto  flex flex-col justify-center">
        <div className="bg-white p-5 rounded-xl text-blue-800 text-lg w-3/4 mx-auto">
          <p className="text-center my-5">
            Votre demande de désinscription aux newsletters a bien étée prise en
            compte.
            <br />
            Merci de votre confiance
          </p>
          <p className="text-center my-5">
            <Link href={"/suggestion"}>
              <button className="mr-2 w-3/4 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">
                {"Retourner à l'accueil"}
              </button>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
