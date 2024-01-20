"use client";
import axios from "axios";
import { useQuery } from "react-query";

const useAvisAndSuggestionsContainer = () => {
  const getAvisAndSuggestions = async () => {
    const response = await axios.get(
      "/api/backend/frontend-data-views/avis-suggestions"
    );
    return {
      avis: response.data.avis,
      suggestions: response.data.suggestions,
    };
  };
  const avis_suggestionQuery = useQuery(
    "avisSuggestionView",
    getAvisAndSuggestions
  );

  console.log("avis_suggestionQuery", avis_suggestionQuery.data);

  return {
    avis_suggestionQuery,
  };
};

export { useAvisAndSuggestionsContainer };
