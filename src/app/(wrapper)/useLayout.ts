"use client";

import { DataType } from "@/types/WrapperContext";
import { useState } from "react";

const useLayout = () => {
  const [data, setData] = useState<DataType>({
    metaData: {
      title: "",
      description: "",
    },
    leftComponent: {
      title: "",
      description: "",
    },
  });

  return { data, setData };
};

export default useLayout;
