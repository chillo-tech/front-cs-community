import { capitalize, capitalizeSentence, truncArray } from "@/utils";
import { AvisCard, useAvis } from ".";
import { useMemo } from "react";
import Link from "next/link";
import { getAvis } from "@/utils/data/avis";
import CTA from "../CTA";

const AvisCardContainer = async ({ ctaColor }: any) => {
  const comments = await getAvis();
  return (
    <>
      {comments && comments.length ? (
        <section className="py-10">
          <h3 className="title text-blue-900 pl-2 mb-2 flex justify-between flex-wrap items-center">
            <span className="font-extrabold text-4xl text-white md:text-blue-900">
              Ce que pensent nos stagiaires
            </span>
            <Link
              href={"https://avis.chillo.tech"}
              className="underline text-white md:text-blue-900"
            >
              Partagez nous votre avis
            </Link>
          </h3>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="grid gap-2">
              {comments.slice(0, 3).map((comment: any, index: number) => {
                return (
                  <AvisCard
                    key={`Comment-${index}-${comment.id}`}
                    description={comment.text}
                    name={`${capitalizeSentence(comment.first_name)} ${
                      comment.last_name ? comment.last_name.toUpperCase() : ""
                    }`}
                    note={Number(comment.note)}
                  />
                );
              })}
            </div>
            <div className="grid gap-2">
              {comments.slice(4, 7).map((comment: any, index: number) => {
                return (
                  <AvisCard
                    key={`Comment-${index}-${comment.id}`}
                    description={comment.text}
                    name={`${capitalizeSentence(comment.first_name)} ${
                      comment.last_name ? comment.last_name.toUpperCase() : ""
                    }`}
                    note={Number(comment.note)}
                  />
                );
              })}
            </div>
            <div className="grid gap-2">
              {comments.slice(8, 11).map((comment: any, index: number) => {
                return (
                  <AvisCard
                    key={`Comment-${index}-${comment.id}`}
                    description={comment.text}
                    name={`${capitalizeSentence(comment.first_name)} ${
                      comment.last_name ? comment.last_name.toUpperCase() : ""
                    }`}
                    note={Number(comment.note)}
                  />
                );
              })}
            </div>
          </div>
          <CTA color={ctaColor} />
        </section>
      ) : null}
    </>
  );
};

export { AvisCardContainer };
