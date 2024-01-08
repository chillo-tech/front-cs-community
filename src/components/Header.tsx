/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='pt-8 px-2'>
      <Link href="/suggestions">
        <>
        a
          <span className="md:hidden mb-4">
            <img
              width="120"
              height="35"
              src="/static/images/chilloservices.png"
              alt="chillo services"
            />
          </span>
          <span className="hidden md:block ">
            <img
              width="200"
              height="60"
              src="/static/images/chilloservices.png"
              alt="chillo services"
            />
          </span>
        </>
      </Link>
    </header>
  );
}

export default Header;
