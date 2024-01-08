import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <header className='pt-8 px-2'>
      <Link href="/suggestionss">
        <>
          <span className="md:hidden">
            <Image
              width="120"
              height="35"
              src="https://chillo.tech/_next/image?url=%2Fimages%2Fchillo-services.png&w=256&q=75"
              alt="chillo services"
            />
          </span>
          <span className="hidden md:block">
            <Image
              width="200"
              height="60"
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
