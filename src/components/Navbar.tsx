'use server';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav
      className="
        sm:sticky top-0 flex flex-col 
        justify-between align-center px-4 mb-2 py-4 
        sm:flex-row sm:py-6 
        text-xl border-b-[1px] border-neutral-800 bg-gray-950"
    >
      <ul className="flex flex-col sm:flex-row align-center">
        <Link
          href={'/'}
          className="px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer"
        >
          Home
        </Link>
        <Link
          href={'/posts'}
          className="px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer"
        >
          Posts
        </Link>
      </ul>
      <ul className="flex flex-col sm:flex-row align-center">
        <Link
          href={'/setup'}
          className="px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer"
        >
          Setup
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
