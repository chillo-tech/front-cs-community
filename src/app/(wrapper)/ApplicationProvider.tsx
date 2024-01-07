"use client";
import React from "react";
import { WrapperContext } from "./WrapperContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./layout";
import useLayout from "./useLayout";
import { DataType } from "@/types/WrapperContext";

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
    <WrapperContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>
        <head>
          <title>{value.data.metaData.title}</title>
          <meta name="description" content={value.data.metaData.description} />
        </head>
        {children}
      </QueryClientProvider>
    </WrapperContext.Provider>
  );
};

export default ApplicationProvider;
