import { AvisCardContainer, SuggestionsCardContainer } from "@/components";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className=" px-3 py-2 md:col-span-6 md:h-[100vh] overflow-y-scroll layout-aside">
      <div className="md:hidden">
        <Header data={data} />
      </div>

      <div className="overflow-x-hidden hidden min-h-screen md:flex flex-col justify-between ">
        <div className="space-y-3">
          <Header data={data} />
          <div className="flex flex-col gap-4">
            <SuggestionsCardContainer />
            <AvisCardContainer />
          </div>
        </div>
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
