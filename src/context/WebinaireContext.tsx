import React, { createContext } from "react";

import { useWrapper } from "@/hooks/webinaire";
import { IWebinaireView } from "@/types";

export const context = createContext<ReturnType<typeof useWrapper>>({} as any);

const Wrapper = ({
  children,
  view,
}: {
  children: React.ReactNode;
  view: IWebinaireView;
}) => {
  const data = useWrapper({ view });

  return <context.Provider value={data}>{children}</context.Provider>;
};

export { Wrapper };
