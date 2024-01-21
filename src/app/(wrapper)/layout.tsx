"use client";
import Footer from "@/components/Footer";
import React, { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import ApplicationProvider from "./ApplicationProvider";
import LayoutAside from "./LayoutAside";
import { AvisAndSuggestionsContainer } from "@/components";

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
          <div className="md:hidden pt-5">
            
            <Footer color="white" />
          </div>
        </section>
      </section>
    </ApplicationProvider>
  );
}
