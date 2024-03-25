import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

const configs = {
  defaultOptions: {
    queries: {
      staleTime: 5,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retryDelay: 1000,
    },
  },
};
export default function App({
  Component,
  pageProps: { dehydratedState, session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient(configs);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
