import { truncArray } from "@/utils";
import { AvisCard } from ".";
import { useMemo } from "react";

const AvisCardContainer = ({ avisArray }: { avisArray: any[] }) => {
  const truncedArray = useMemo(() => truncArray(avisArray, 3), [avisArray]);
  return (
    <div className="grid grid-cols-3 gap-3 ">
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
                  title={""}
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
