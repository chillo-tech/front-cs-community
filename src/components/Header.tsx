import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='pt-8 px-2'>
      <Link href="/suggestions">
        <>
          <span className="md:hidden mb-4">
            <Image
              width="120"
              height="35"
              src="/images/chillo-services.png"
              alt="chillo services"
            />
          </span>
          <span className="hidden md:block ">
            <Image
              width="200"
              height="60"
              src="/images/chillo-services.png"
              alt="chillo services"
            />
          </span>
        </>
      </Link>
    </header>
  );
}

export default Header;
