"use client";
import { axios } from "@/utils";
import { useQuery } from "react-query";

const useAvisCardContainer = () => {
  const getAvis = async () => {
    const response = await axios.get("/frontend-data-views/avis-suggestions");
  };
  const viewQuery = useQuery("avisCards", getAvis);
  return {
    viewQuery,
  };
};

export { useAvisCardContainer };
