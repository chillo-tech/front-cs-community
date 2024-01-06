"use client";

import { HomeContext } from "@/app/layout";
import { useContext, useEffect } from "react";

export const useHome = () => {
  const homeContext = useContext(HomeContext);
  useEffect(() => {
    if (homeContext.setValue) {
      homeContext.setValue({
        metadata: {
          title: "newsletters",
          description: "newsletter unsubscribe module of chillo.tech",
        },
        descriptions: [],
      });
    }
  }, []);
};
