"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import DisplayImage from "./DisplayImage";

function LandingPageHeader({ heros }: any) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const jump = (h: string) => {
    setIsOpen(!isOpen);
    var url = location.href; //Save down the URL without hash.
    location.href = h; //Go to the target element.
    history.replaceState(null, "", url); //Don't like hashes. Changing it back.
  };
  return (
    <>
      <header className="sticky top-0 left-0 z-30 bg-[#F8FCEC]">
        <div className="container">
          <div className="md:w-4/5 mx-auto flex items-center justify-between">
            <Link href="/" className="w-56 relative py-2">
              <DisplayImage
                path="/images/chillo-services.webp"
                alt="formation-chillo.tech"
                local={true}
                wrapperClasses="md:my-2 h-12 md:h-16 flex flex-col items-center justify-center w-40 md:w-60"
              />
            </Link>
            <div className="text-md gap-2  md:gap-4 md:text-xl flex text-black font-extrabold px-2 md:px-0">
              <Link href="#programme" className="font-extrabold">
                <span className="hidden md:block">Le programme</span>
                <span className="md:hidden">Programme</span>
              </Link>
              <Link href="#testimonials" className="font-extrabold">
                <span className="hidden md:block">Avis reçus</span>
                <span className="md:hidden">Avis</span>
              </Link>
              <Link href="#prices" className="font-extrabold">
                Prix
              </Link>
            </div>
            <Link
              href="#prices"
              className="bg-[#2563EB] rounded-full px-4 !text-white text-lg py-2 gap-1 hidden md:flex items-center justify-center"
            >
              <span>{heros[0]?.links[0]?.label}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default LandingPageHeader;
