"use client";
import React from "react";
import { ApplicationContext } from "./ApplicationContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { DataType } from "@/types/WrapperContext";

export const queryClient = new QueryClient();
const ApplicationProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: {
    data: DataType;
    setData: React.Dispatch<React.SetStateAction<DataType>>;
  };
}) => {
  return (
    <ApplicationContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <head>
          <title>{value.data.metaData.title}</title>
          <meta name="description" content={value.data.metaData.description} />
        </head>
        {children}
      </QueryClientProvider>
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
