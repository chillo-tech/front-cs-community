"use client";
import axios from "axios";
import { useQuery } from "react-query";

const useAvis = () => {
  const getAvis = async () => {
    const response = await axios.get("/api/backend/backoffice/avis");
    return {
      avis: response.data.avis,
    };
  };
  const avisQuery = useQuery("avisView", getAvis);

  return {
    avisQuery,
  };
};

export { useAvis };
