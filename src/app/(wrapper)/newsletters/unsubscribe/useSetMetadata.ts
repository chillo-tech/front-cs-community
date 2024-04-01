"use client";

import { useContext, useEffect } from "react";
import { ApplicationContext } from "@/context/ApplicationContext";

export const useSetMetadata = () => {
  const {setData } = useContext(ApplicationContext);

  useEffect(() => {
    setData({
      leftComponent: {
        description: ``,
        title: ``,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Unsubscribe Newsletters",
      },
    });
  }, [setData]);
};
