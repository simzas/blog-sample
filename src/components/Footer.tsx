'use server';

import React from 'react';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer
      className="
        flex flex-row 
        justify-center align-center px-4 mt-2 py-4 
        sm:flex-row sm:py-6 sm:mt-6
        text-md text-slate-400 border-t-[1px] border-neutral-800 bg-gray-950"
    >
      <address>
        <small>
          Copy<span className="line-through text-slate-600">right</span>left{' '}
          <time dateTime="2023">2023</time> by{' '}
          <Link href={'https://github.com/simzas'} className="cursor-pointer">
            Šimon Zasadil
          </Link>
        </small>
      </address>
    </footer>
  );
};

export default Footer;
