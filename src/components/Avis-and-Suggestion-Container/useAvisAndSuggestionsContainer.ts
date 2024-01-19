"use client";
import { axiosInstance } from "@/utils";
import axios from "axios";
import { useQuery } from "react-query";

const useAvisAndSuggestionsContainer = () => {
  const getAvisAndSuggestions = async () => {
    const response = await axios.get(
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

  return {
    avis_suggestionQuery,
  };
};

export { useAvisAndSuggestionsContainer };
