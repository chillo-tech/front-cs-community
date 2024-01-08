"use client";
import React from "react";
import { ApplicationContext } from "./ApplicationContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { DataType } from "@/types/WrapperContext";

export const queryClient = new QueryClient();

const ApplicationProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ApplicationProvider;
