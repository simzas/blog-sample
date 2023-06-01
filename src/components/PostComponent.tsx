"use client"

import { FC } from 'react';
import Link from 'next/link';

const PostComponent: FC<PostProps> = ({ post }) => {

    return (
        <div className="py-4 md:min-w-[600px] md:max-w-5xl">
            <div className="bg-slate-900 rounded border border-slate-700
                    hover:border-slate-600">
                <p className="px-4 pt-4 text-2xl first-letter:uppercase">{post.title}</p>
                <p className="px-4 py-2 text-slate-400 text-sm"><span className="text-xs">({post.userID})</span> <Link href={'/profile'} className="blue-link font-semibold">{post.username}</Link> at <Link href={'https://www.' + post.website} target="_blank" className="blue-link">{post.website}</Link></p>
                <div className="border-b border-slate-800 my-1"></div>
                <div className="p-4 first-letter:uppercase">
                    <span>{post.body}</span>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;