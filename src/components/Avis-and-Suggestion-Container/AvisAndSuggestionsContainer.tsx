import React from "react";
import { AvisCardContainer, SuggestionsCardContainer } from "..";
import { useAvisAndSuggestionsContainer } from "./useAvisAndSuggestionsContainer";

const AvisAndSuggestionsContainer = () => {
  const { avis_suggestionQuery } = useAvisAndSuggestionsContainer();

  return avis_suggestionQuery.data ? (
    <div className="flex flex-col gap-10 max-w-[100vw]">
      <SuggestionsCardContainer
        suggestions={avis_suggestionQuery.data.suggestions}
      />
      <AvisCardContainer avisArray={avis_suggestionQuery.data.avis} />
    </div>
  ) : null;
};

export { AvisAndSuggestionsContainer };
