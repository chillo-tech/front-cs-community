import axios, { AxiosError, AxiosRequestConfig } from "axios";
const axiosInstance = axios.create();
//instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.BACKOFFICE_API_TOKEN}`;
axiosInstance.defaults.headers.common["Accept"] = "application/json";

const onRequest = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  const { url = "" } = config;
  const isToBackoffice = url.startsWith("/api/backoffice");
  const urlToCall = isToBackoffice
    ? url.replaceAll("/api/backoffice", "/items")
    : url.replaceAll("/api/backend", "/api/v1");

  const authorization = {
    Authorization: `Bearer ${
      isToBackoffice
        ? process.env.NEXT_PUBLIC_BACKOFFICE_API_TOKEN
        : process.env.NEXT_PUBLIC_BACKEND_API_TOKEN
    }`,
  };

  const newBaseUrl = isToBackoffice
    ? process.env.NEXT_PUBLIC_BACKOFFICE_API
    : "https://api.leganda.chillo.fr";
  
  return {
    ...config,
    baseURL: newBaseUrl,
    url: urlToCall,
    headers: {
      ...config.headers,
      ...authorization,
    },
  };
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};
axiosInstance.interceptors.request.use(onRequest as any, onRequestError);
export { axiosInstance };
