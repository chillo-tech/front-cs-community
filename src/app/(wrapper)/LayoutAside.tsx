import { AvisCardContainer, SuggestionsCardContainer } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className=" px-3 py-2 md:col-span-6">
      <div className="md:hidden">
        <Header data={data} />
      </div>

      <div className="overflow-hidden hidden md:flex flex-col justify-between md:h-full">
        <Header data={data} />
        <SuggestionsCardContainer />
        <h3 className="title text-blue-900 font-extrabold text-xl md:text-xl pl-2 mt-2">
          Ce que pensent nos stagiaires
        </h3>
        <AvisCardContainer />
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
