"use client";
import { axiosInstance } from "@/utils";
import { useQuery } from "react-query";

const useAvisAndSuggestionsContainer = () => {
  const getAvisAndSuggestions = async () => {
    const response = await axiosInstance.get(
      "/api/backend/frontend-data-views/avis-suggestions"
    );
    return {
      avis: response.data.avis.data,
      suggestions: response.data.suggestions.data,
    };
  };
  const avis_suggestionQuery = useQuery(
    "avisSuggestionView",
    getAvisAndSuggestions
  );

  console.log("data", avis_suggestionQuery.data);

  return {
    avis_suggestionQuery,
  };
};

export { useAvisAndSuggestionsContainer };
