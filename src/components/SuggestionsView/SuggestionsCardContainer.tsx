import { truncArray } from '@/utils';
import { useMemo } from 'react';
import { useSuggestions } from '.';
import { SuggestionCard } from '..';
import '../styles/animation-suggestion.css';

const SuggestionsCardContainer = () => {
  const { suggestionQuery } = useSuggestions();
  const truncedArray = useMemo(() => {
    if (!suggestionQuery.data) return undefined;
    return truncArray(suggestionQuery.data.suggestions, 1);
  }, [suggestionQuery.data]);

  return (
    <div>
      <h3 className="title text-blue-900 font-extrabold text-xl md:text-xl pl-2 mt-2">
        Formations suggerées
      </h3>
      <div className={`grid gap-3 floating-row`}>
        {truncedArray?.map((subArray, idx) => {
          return (
            <div
              key={idx}
              className={`flex gap-1 items-center relative ${idx % 2 === 0 ? '' : 'pl-big'} `}
            >
              {subArray.map((el, j) => {
                return (
                  <SuggestionCard
                    key={`${idx}-${j}`}
                    title={el.titre}
                    name={`${
                      Array.isArray(el.suggestion_contact) &&
                      el.suggestion_contact[0]?.contact_id?.firstName &&
                      el.suggestion_contact[0]?.contact_id?.firstName.toUpperCase()
                    } ${
                      Array.isArray(el.suggestion_contact) &&
                      el.suggestion_contact[0]?.contact_id?.lastName
                    }`}
                    position={el.suggestion_contact[0]?.contact_id?.position}
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

export { SuggestionsCardContainer };
