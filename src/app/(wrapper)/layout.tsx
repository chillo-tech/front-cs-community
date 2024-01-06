import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-4 border-red-900 md:grid md:grid-cols-5 min-h-screen justify-between">
      <aside className='md:col-span-2 flex flex-col justify-between'>
        <Header />
        <div className="texte"></div>
        <Footer />
      </aside>
      <section className='md:col-span-3 relative bg-[#1e3b8a]'>
        {children}
      </section>
    </section>
  );
}

export default Wrapper;
