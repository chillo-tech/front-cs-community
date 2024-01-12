import axios, {AxiosError, AxiosRequestConfig} from "axios";

const BASE_PATH = "api/v1"
const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => { 
  console.log('====================================');
  console.log(process.env)
  console.log('====================================');
  
  const baseURL = `${process.env.NEXT_PUBLIC_BACKEND_API}/${BASE_PATH}`;
  const authorization = { 'Authorization':`Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_TOKEN}`};

  return {
      ...config,
      baseURL,
      headers: {
        ...config.headers,
        ...(authorization)
      }
     
    };
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
}
axios.interceptors.request.use(onRequest as any, onRequestError);
export { axios };
