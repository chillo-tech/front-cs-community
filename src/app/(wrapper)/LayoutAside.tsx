import { AvisCardContainer, SuggestionsCardContainer } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className=" px-3 py-2 md:col-span-2">
      <div className="md:hidden">
        <Header data={data} />
      </div>

      <div className="hidden md:flex flex-col justify-between md:h-full">
        <Header data={data} />
        <SuggestionsCardContainer />
        <AvisCardContainer />
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
