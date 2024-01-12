"use client";
import { ApplicationContext } from "./(wrapper)/ApplicationContext";
import useLayout from "./(wrapper)/useLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useLayout();

  return (
    <html lang="en">
      <ApplicationContext.Provider value={{ data, setData }}>
        <head>
          <title>{data.metaData.title}</title>
          <meta name="description" content={data.metaData.description} />
        </head>
        <body className="bg-slate-200">{children}</body>
      </ApplicationContext.Provider>
    </html>
  );
}
