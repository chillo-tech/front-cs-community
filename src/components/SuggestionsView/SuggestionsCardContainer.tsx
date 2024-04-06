import { truncArray } from "@/utils";
import { useMemo } from "react";
import { useSuggestions } from ".";
import { SuggestionCard } from "..";
import "../styles/animation-suggestion.css";
import Link from "next/link";

const SuggestionsCardContainer = () => {
  const { suggestionQuery } = useSuggestions();
  const truncedArray = useMemo(() => {
    if (!suggestionQuery.data) return undefined;
    return truncArray(suggestionQuery.data.suggestions, 1);
  }, [suggestionQuery.data]);
  return (
    <div>
      {Array.isArray(truncedArray) && truncedArray.length ? (
        <h3 className="title text-blue-900 pl-2 mt-2 flex items-center justify-between">
          <span className="font-extrabold text-xl">Formations suggerées</span>
          <Link href={"https://suggestions.chillo.tech"} className="underline text-white md:text-blue-900">
            Suggérer une formation
          </Link>
        </h3>
      ) : null}
      <div className={`grid gap-3 floating-row`}>
        {truncedArray?.map((subArray, idx) => {
          return (
            <div
              key={idx}
              className={`flex gap-1 items-center relative ${
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
