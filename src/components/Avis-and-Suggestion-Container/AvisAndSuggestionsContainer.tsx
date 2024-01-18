import React from "react";
import { AvisCardContainer, SuggestionsCardContainer } from "..";
import { useAvisAndSuggestionsContainer } from "./useAvisAndSuggestionsContainer";

const AvisAndSuggestionsContainer = () => {
  const { avis_suggestionQuery } = useAvisAndSuggestionsContainer();

  return avis_suggestionQuery.data ? (
    <div className="grid gap-10">
      <AvisCardContainer avisArray={avis_suggestionQuery.data.avis} />
      <SuggestionsCardContainer
        suggestions={avis_suggestionQuery.data.suggestions}
      />
    </div>
  ) : null;
};

export { AvisAndSuggestionsContainer };
