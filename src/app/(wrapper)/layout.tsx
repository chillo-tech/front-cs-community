"use client";
import Footer from "@/components/Footer";
import React, { useContext } from "react";
import ApplicationProvider from "./ApplicationProvider";
import useLayout from "./useLayout";
import LayoutAside from "./LayoutAside";
import { ApplicationContext } from "./ApplicationContext";


export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const { data, setData } = useContext(ApplicationContext)
  return (
    <ApplicationProvider >
      <section className="md:grid md:grid-cols-5 min-h-screen justify-between">
        <LayoutAside data={data} />
        <section className="md:col-span-3 relative bg-[#1e3b8a] flex flex-col items-center justify-center">
          {children}
          <div className="md:hidden">
            <Footer color="white" />
          </div>
        </section>
      </section>
    </ApplicationProvider>
  );
}
