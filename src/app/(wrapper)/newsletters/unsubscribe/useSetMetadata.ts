"use client";

import { useContext, useEffect } from "react";
import { WrapperContext } from "../../WrapperContext";

export const useSetMetadata = () => {
  const { data, setData } = useContext(WrapperContext);

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
