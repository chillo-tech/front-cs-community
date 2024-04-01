import React from "react";
type DataType = {
  metaData: {
    title: string;
    description: string;
  };
  leftComponent:
    | {
        title: string;
        description: string;
      }
    | React.ReactElement;
};

export type { DataType };
