"use client";
import Link from "next/link";
import React from "react";
import { useSetMetadata } from "./useSetMetadata";

const Home = () => {
  useSetMetadata();

  return (
    <main>
      <section className="container mx-auto py-32 md:my-auto  flex flex-col justify-center">
        <div className="bg-white p-5 rounded-xl text-lg w-3/4 mx-auto">
          <p className=" my-5  text-blue-800 ">
            Votre demande de désinscription aux newsletters a bien étée prise en
            compte.
          </p>
          <p>
            Nous aimerions connaitre la raison de votre choix.
            <br />
            N&apos;hesitez pas à nous en dire plus.
            <br />
            Vous pouvez donner votre avis <Link className="text-blue-800 underline" href="/avis">ici</Link> ou nous
            contacter par mail :{" "}
            <Link className="text-blue-800 underline" href={`mailto:${process.env.NEXT_PUBLIC_OWNER_EMAIL}`}>
              {process.env.NEXT_PUBLIC_OWNER_EMAIL}
            </Link>
          </p>
          <p className="text-blue-800">Merci de votre confiance</p>
          <p className="text-center my-5">
            <Link href={"https://chillo.tech"}>
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
