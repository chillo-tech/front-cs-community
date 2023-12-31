"use client";
import Footer from "@/components/footer";
import GoWhatsappBtn from "@/components/goWhatsapp";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import { createContext, useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const HomeContext = createContext({});




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState({
    metadata: {
      title: "Suggest module",
      description: "Powered by chillo.tech",
    },
    descriptions: [""],
  });
  return (
    <html lang="en">
      <HomeContext.Provider value={value}>
        <head>
          <title>{value.metadata.title}</title>
          <meta name="description" content={value.metadata.description} />
        </head>
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
          <GoWhatsappBtn />
        </body>
      </HomeContext.Provider>
    </html>
  );
}
