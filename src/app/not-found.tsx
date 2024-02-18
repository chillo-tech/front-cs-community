"use client";
import Link from "next/link";
import React from "react";
import LayoutAside from "./(wrapper)/LayoutAside";
import { AvisCardContainer, SuggestionsCardContainer } from "@/components";
import Footer from "@/components/Footer";

const CustomNotFound = () => {
  return (
    <>
      <section className="md:grid md:grid-cols-12 min-h-screen justify-between relative">
        <LayoutAside
          data={{
            leftComponent: {
              description:
                "Erreur 404 : La ressource recherchée est introuvable. Explorez notre site avec assurance ou contactez notre support technique pour une assistance immédiate.",
              title: "La page que vous cherchez n'a pas été trouvée",
            },
            metaData: {
              title: "Erreur 404 : Ressource Introuvable",
              description: "Powered by chillo.tech",
            },
          }}
        />
        <section className="md:col-span-6 bg-[#1e3b8a] flex flex-col justify-center items-center relative ">
          <main>
            <section className="container mx-auto py-32 md:my-auto  flex flex-col justify-center">
              <div className="bg-white p-5 rounded-xl text-blue-800 text-lg w-3/4 mx-auto">
                <p className="text-center my-5 text-rose-800">
                  Désolé, La page que vous recherchez n&apos;existe pas
                </p>
                <p className="text-center my-5">
                  <Link href={"https://chillo.tech"}>
                    <button className="mr-2 w-3/4 mx-auto border border-blue-800 hover:border-blue-800 text-blue-800 font-light py-2 px-4 rounded-lg shadow-sm">
                      Retourner à l&apos;accueil
                    </button>
                  </Link>
                </p>
              </div>
            </section>
          </main>
          <div className="max-w-[100vw] md:max-w-full overflow-hidden md:hidden md:pt-5">
            <SuggestionsCardContainer />
            <h3 className="title text-blue-900 font-extrabold text-xl md:text-xl pl-2 mt-2">
              Ce que pensent nos stagiaires
            </h3>
            <AvisCardContainer />
            <Footer color="white" />
          </div>
        </section>
      </section>
    </>
  );
};

export default CustomNotFound;
