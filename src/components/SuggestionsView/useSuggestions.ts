"use client";
import axios from "axios";
import { useQuery } from "react-query";

const useSuggestions = () => {
  const getSuggestions = async () => {
    const response = await axios.get(
      "/api/backend/frontend-data-views/suggestions"
    );
    return {
      suggestions: response.data.suggestions,
    };
  };
  const suggestionQuery = useQuery("suggestionView", getSuggestions);

  return {
    suggestionQuery,
  };
};

export { useSuggestions };
