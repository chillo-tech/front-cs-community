"use client";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const HomeContext = createContext<{
  value?: {
    metadata: {
      title: string;
      description: string;
    };
    descriptions: string[];
  };
  setValue?: Dispatch<
    SetStateAction<{
      metadata: {
        title: string;
        description: string;
      };
      descriptions: string[];
    }>
  >;
}>({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState({
    metadata: {
      title: "Suggestions",
      description: "Powered by chillo.tech",
    },
    descriptions: [""],
  });
  return (
    <html lang="en">
      <HomeContext.Provider value={{ value, setValue }}>
        <head>
          <title>{value.metadata.title}</title>
          <meta name="description" content={value.metadata.description} />
        </head>
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
          <WhatsappButton />
        </body>
      </HomeContext.Provider>
    </html>
  );
}
