"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type DataType = {
  metaData: {
    title: string;
    description: string;
  };
  leftComponent: {
    title: string;
    desc: string;
  };
};

const dataInit: DataType = {
  metaData: {
    title: "",
    description: "",
  },
  leftComponent: {
    title: "",
    desc: "",
  },
};

export const wrapperContext = createContext<{
  data: DataType;
  setData: (data: DataType) => void;
}>({
  data: dataInit,
  setData: (d: DataType) => {},
});

export const queryClient = new QueryClient();
function Wrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<DataType>({
    metaData: {
      title: "",
      description: "",
    },
    leftComponent: {
      title: "",
      desc: "",
    },
  });
  return (
    <wrapperContext.Provider value={{ data, setData }}>
      <QueryClientProvider client={queryClient}>
        <head>
          <title>{data.metaData.title}</title>
          <meta name="description" content={data.metaData.description} />
        </head>
        <section className="border-4 border-red-900 md:grid md:grid-cols-5 min-h-screen justify-between">
          <aside className="md:col-span-2 flex flex-col justify-between">
            <Header />
            <header className="text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col grow">
              <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">
                {data.leftComponent.title}
              </h2>
              <p className="mb-3 text-bold md:my-7 text-xl md:text-left">
                {data.leftComponent.desc}
              </p>
            </header>
            <Footer />
          </aside>
          <section className="md:col-span-3 relative bg-[#1e3b8a]">
            {children}
          </section>
        </section>
      </QueryClientProvider>
    </wrapperContext.Provider>
  );
}

export default Wrapper;
