import React, { useMemo } from "react";
import { SuggestionCard } from ".";
import { truncArray } from "@/utils";
import "./styles/animation-suggestion.css";

const SuggestionsCardContainer = ({ suggestions }: { suggestions: any[] }) => {
  const truncedArray = useMemo(() => {
    return truncArray(suggestions, 2);
  }, [suggestions]);

  return (
    <div className={`grid gap-3 floating-row`}>
      {truncedArray.map((subArray, idx) => {
        return (
          <div
            key={idx}
            className={`flex gap-4 items-center relative ${
              idx % 2 === 0 ? "" : "pl-big"
            } `}
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
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { SuggestionsCardContainer };
