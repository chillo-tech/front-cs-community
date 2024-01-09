"use client";

import { useContext, useEffect } from "react";
import { ApplicationContext } from "../../ApplicationContext";

export const useSetMetadata = () => {
  const {setData } = useContext(ApplicationContext);

  useEffect(() => {
    setData({
      leftComponent: {
        desc: ``,
        title: ``,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Unsubscribe Newsletters",
      },
    });
  }, [setData]);
};
