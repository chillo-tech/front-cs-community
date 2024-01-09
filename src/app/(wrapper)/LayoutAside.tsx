import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className=" px-5 py-4 md:col-span-2 flex flex-col justify-between">
      <Header />
      <header className="mt-4 text-blue-900 font-extralight infos bg--900 md:py-10 px-4 flex flex-col grow">
        <h2 className="title from-slate-900 font-extrabold text-2xl md:text-4xl">
          {data.leftComponent.title}
        </h2>
        <p className="mb-3 text-bold md:my-7 text-xl md:text-left">
          {data.leftComponent.desc}
        </p>
      </header>
      <div className="hidden md:block">
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
