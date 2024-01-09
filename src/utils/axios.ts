import axios from "axios";

const BASE_PATH = "api/v1"

axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_URI}/${BASE_PATH}`;
axios.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export { axios };
