"use client";
import { AvisCardContainer, SuggestionsCardContainer } from "@/components";
import Footer from "@/components/Footer";
import React, { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import ApplicationProvider from "./ApplicationProvider";
import LayoutAside from "./LayoutAside";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useContext(ApplicationContext);
  return (
    <ApplicationProvider>
      <section className="md:grid md:grid-cols-5 min-h-screen justify-between relative">
        <LayoutAside data={data} />
        <section className="md:col-span-3 bg-[#1e3b8a] flex flex-col justify-center items-center relative ">
          {children}
          <div className="max-w-[100vw] md:max-w-full overflow-hidden md:hidden md:pt-5">
            <SuggestionsCardContainer />
            <AvisCardContainer />
            <Footer color="white" />
          </div>
        </section>
      </section>
    </ApplicationProvider>
  );
}
