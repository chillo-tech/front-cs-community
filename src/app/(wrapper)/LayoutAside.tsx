import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className=" px-3 py-2 md:col-span-2 flex flex-col justify-between">
      <Header />
      <div className="mt-1 text-blue-900 font-extralight infos bg--900 md:py-7 px-2 flex flex-col grow">
        <h2
          className="title from-slate-900 font-extrabold text-3xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.title }}
        />
        <p
          className="mb-2 text-bold md:my-5 text-l md:text-left"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.description }}
        />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
