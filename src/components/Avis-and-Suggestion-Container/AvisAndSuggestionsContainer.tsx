import React from "react";
import { AvisCardContainer, SuggestionsCardContainer } from "..";
import { useAvisAndSuggestionsContainer } from "./useAvisAndSuggestionsContainer";

const AvisAndSuggestionsContainer = () => {
  const { avis_suggestionQuery } = useAvisAndSuggestionsContainer();

  return avis_suggestionQuery.data ? (
    <div className="grid gap-10">
      <SuggestionsCardContainer
        suggestions={avis_suggestionQuery.data.suggestions}
      />
      <AvisCardContainer avisArray={avis_suggestionQuery.data.avis} />
    </div>
  ) : null;
};

export { AvisAndSuggestionsContainer };
