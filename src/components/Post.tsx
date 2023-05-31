"use client"

import Link from 'next/link';

interface PostComponentProps {
    post: {
        postID: number;
        userID: number;
        title: string;
        username: string;
        website: string;
        body: string;
    }
}

const PostComponent: React.FC<PostComponentProps> = ({ post }) => {

    return (
        <div key={post.postID} className="py-4 md:min-w-[600px]">
            <div className="bg-slate-900 rounded border-[1px] border-slate-700
                    hover:border-slate-600">
                <p className="px-4 pt-4 text-2xl first-letter:uppercase">{post.title}</p>
                <p className="px-4 py-2 text-slate-400 text-sm"><span className="text-xs">({post.userID})</span> <Link href={'/profile'} className="blue-link font-semibold">{post.username}</Link> at <Link href={'https://www.' + post.website} target="_blank" className="blue-link">{post.website}</Link></p>
                <div className="border-b-[1px] border-slate-800 my-1"></div>
                <div className="p-4 first-letter:uppercase">
                    <span>{post.body}</span>
                </div>
            </div>
        </div>
    )
}

export default PostComponent;