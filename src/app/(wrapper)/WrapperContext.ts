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
    desc: "",
  },
};

const WrapperContext = createContext<{
  data: DataType;
  setData: (data: DataType) => void;
}>({
  data: dataInit,
  setData: (d: DataType) => {},
});

export { WrapperContext };
