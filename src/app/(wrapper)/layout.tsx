"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { QueryClient } from "react-query";
import ApplicationProvider from "./ApplicationProvider";
import useLayout from "./useLayout";
import LayoutAside from "./LayoutAside";

export const queryClient = new QueryClient();

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useLayout();

  return (
    <ApplicationProvider value={{ data, setData }}>
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
