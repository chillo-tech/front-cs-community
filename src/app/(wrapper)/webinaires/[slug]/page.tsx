"use client";
import Aside from "@/components/webinaire/Aside";
import WebinaireForm from "@/components/webinaire/form/webinaireForm";
import { ApplicationContext } from "@/context/ApplicationContext";
import { Wrapper as WebinaireWapper } from "@/context/WebinaireContext";
import { useWebinaire } from "@/hooks/webinaire";
import { useContext, useEffect } from "react";

const Webinaire = () => {
  const { viewQuery } = useWebinaire();

  const asideComp = <Aside data={viewQuery.data} />;

  const { setData } = useContext(ApplicationContext);
  useEffect(() => {
    if (!asideComp) return;
    setData({
      leftComponent: asideComp,
      metaData: {
        description: "weinaire developpé par Chillo",
        title: viewQuery.data?.title || "Webinaire",
      },
    });
  }, [viewQuery.data]);
  return viewQuery.data ? (
    <WebinaireWapper view={viewQuery.data}>
      <section>
        <main
          className={` container mx-auto my-5 mb-10 flex w-full flex-col items-start justify-between gap-10 px-2 lg:flex-row  lg:items-center`}
        >
          <WebinaireForm data={viewQuery.data} />
        </main>
      </section>
    </WebinaireWapper>
  ) : null;
};

export default Webinaire;
