import { truncArray } from '@/utils';
import { AvisCard, useAvis } from '.';
import { useMemo } from 'react';

const AvisCardContainer = () => {
  const { avisQuery } = useAvis();
  const truncedArray = useMemo(() => {
    if (!avisQuery.data) return undefined;
    return truncArray(avisQuery.data.avis, 2);
  }, [avisQuery.data]);
  return (
    <div>
      <h3 className="title text-blue-900 font-extrabold text-xl md:text-xl pl-2 mt-2">
        Ce que pensent nos stagiaires
      </h3>
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
