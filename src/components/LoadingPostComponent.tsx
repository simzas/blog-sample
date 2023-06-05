'use client';

import React from 'react';
import { FC } from 'react';

const LoadingPostComponent: FC = () => {
  return (
    <div className="py-4 md:min-w-[600px] md:max-w-5xl">
      <div
        className="border rounded bg-slate-900 border-slate-700 hover:border-slate-600"
      >
        <p className="px-4 pt-4 text-2xl first-letter:uppercase">Title</p>
        <p className="px-4 py-2 text-sm text-slate-400">Author</p>
        <div className="my-1 border-b border-slate-800"></div>
        <div className="p-4 first-letter:uppercase">
          <span className="w-max">
            Placeholder text so you can read something while this page is
            loading for you. Gimme lil moment please, thanks for your patience!
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPostComponent;
