/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
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
    </header>
  );
}

export default Header;
