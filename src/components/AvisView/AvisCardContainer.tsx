import { truncArray } from "@/utils";
import { AvisCard, useAvis } from ".";
import { useMemo } from "react";
import Link from "next/link";

const AvisCardContainer = () => {
  const { avisQuery } = useAvis();
  const truncedArray = useMemo(() => {
    if (!avisQuery.data) return undefined;
    return truncArray(avisQuery.data.avis, 2);
  }, [avisQuery.data]);
  return (
    <div>
      {Array.isArray(truncedArray) && truncedArray.length ? (
        <h3 className="title text-blue-900 pl-2 mt-2 flex justify-between flex-wrap items-center">
          <span className="font-extrabold text-xl text-white md:text-blue-900">
            Ce que pensent nos stagiaires
          </span>
          <Link href={"https://avis.chillo.tech"} className="underline text-white md:text-blue-900">
            Partagez nous votre avis
          </Link>
        </h3>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center w-fit mx-auto px-2 mt-4">
        {truncedArray?.map((subArray, idx) => {
          return (
            <div key={idx} className="grid gap-3 ">
              {subArray.map((avis, avisIdx) => {
                return (
                  <AvisCard
                    key={`avis-${avisIdx}`}
                    description={avis.texte}
                    name={avis.nom}
                    note={avis.note}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AvisCardContainer };
