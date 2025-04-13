import { fetchData } from "../fetch-data";

export const getAvis = async () => {
    const res = await fetchData({
      path: `/api/backoffice/avis`,
    });
  
    return res.data.data;
  };
  