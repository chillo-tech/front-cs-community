"use client";
import { createContext, useState } from "react";

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

const useLayout = () => {
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

  return {data, setData};
};

export default useLayout;
