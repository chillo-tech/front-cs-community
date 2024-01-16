"use client";
import { createContext, useState } from "react";
import { DataType } from "@/types/WrapperContext";

const dataInit: DataType = {
  metaData: {
    title: "",
    description: "",
  },
  leftComponent: {
    title: "",
    description: "",
  },
};

const ApplicationContext = createContext<{
  data: DataType;
  setData: (data: DataType) => void;
}>({
  data: dataInit,
  setData: (d: DataType) => {},
});

export { ApplicationContext };
