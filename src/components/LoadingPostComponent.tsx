"use client"

import { FC } from 'react';

const LoadingPostComponent: FC = () => {

    return (
        <div className="py-4 md:min-w-[600px]">
            <div className="bg-slate-900 rounded border-[1px] border-slate-700
                    hover:border-slate-600">
                <p className="px-4 pt-4 text-2xl first-letter:uppercase">Title</p>
                <p className="px-4 py-2 text-slate-400 text-sm">Author</p>
                <div className="border-b-[1px] border-slate-800 my-1"></div>
                <div className="p-4 first-letter:uppercase">
                    <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingPostComponent;