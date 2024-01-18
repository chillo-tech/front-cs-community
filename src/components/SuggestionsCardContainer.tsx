import React, { useMemo } from "react";
import { SuggestionCard } from ".";
import { truncArray } from "@/utils";
import "./styles/animation-suggestion.css";

const SuggestionsCardContainer = ({ suggestions }: { suggestions: any[] }) => {
  const truncedArray = useMemo(() => {
    return truncArray(suggestions, 3);
  }, [suggestions]);

  return (
    <div className={`grid gap-3 `}>
      {truncedArray.map((subArray, idx) => {
        return (
          <div
            key={idx}
            className={`flex gap-4 items-center relative pl-${
              idx % 2 === 0 ? 0 : 6
            } floating-row`}
          >
            {subArray.map((el, j) => {
              return (
                <SuggestionCard
                  key={`${idx}-${j}`}
                  title={el.titre}
                  name={`${
                    Array.isArray(el.suggestion_contact) &&
                    el.suggestion_contact[0]?.contact_id?.firstName
                  } ${
                    Array.isArray(el.suggestion_contact) &&
                    el.suggestion_contact[0]?.contact_id?.lastName
                  }`}
                  text={
                    Array.isArray(el.suggestion_contact) &&
                    el.suggestion_contact[0]?.contact_id?.tags
                  }
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
