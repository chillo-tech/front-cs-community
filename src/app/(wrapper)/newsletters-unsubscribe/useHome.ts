"use client";

import { useContext, useEffect } from "react";
import { wrapperContext } from "../layout";

export const useHome = () => {
  const { data, setData } = useContext(wrapperContext);

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
