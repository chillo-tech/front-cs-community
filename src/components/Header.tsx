/* eslint-disable @next/next/no-img-element */
import { DataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header({ data }: { data: DataType }) {
  return (
    <header className="pt-4 px-1">
      <Link href="/suggestions">
        <>
          <span className="md:hidden mb-4">
            <img
              width="96"
              height="28"
              src="https://chillo.tech/_next/image?url=%2Fimages%2Fchillo-services.png&w=256&q=75"
              alt="chillo services"
            />
          </span>
          <span className="hidden md:block ">
            <img
              width="160"
              height="48"
              src="https://chillo.tech/_next/image?url=%2Fimages%2Fchillo-services.png&w=256&q=75"
              alt="chillo services"
            />
          </span>
        </>
      </Link>
      <div className="mt-1 text-blue-900 font-extralight infos bg--900 md:py-7 px-2 flex flex-col grow">
        <h2
          className="title from-slate-900 font-extrabold text-3xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.title }}
        />
        <p
          className="mb-2 text-bold md:my-5 text-l md:text-left"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.description }}
        />
      </div>
    </header>
  );
}

export default Header;
