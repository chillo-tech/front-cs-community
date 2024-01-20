import { truncArray } from "@/utils";
import { AvisCard } from ".";
import { useMemo } from "react";

const AvisCardContainer = ({ avisArray }: { avisArray: any[] }) => {
  const truncedArray = useMemo(() => truncArray(avisArray, 2), [avisArray]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center  w-fit mx-auto px-4 sm:px-2">
      {truncedArray.map((subArray, idx) => {
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
  );
};

export { AvisCardContainer };
