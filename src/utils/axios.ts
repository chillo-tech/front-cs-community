import axios from "axios";

const APIV1 = "/api/v1";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URI + APIV1;
console.log("baseUrl", process.env.NEXT_PUBLIC_API_URI + APIV1);
axios.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export { axios };
