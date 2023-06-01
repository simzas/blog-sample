"use client"

import PostComponent from '../../components/PostComponent'
import getPosts from '../../services/ApiServices'

export default async function Post() {

    //TODO přepsat
    let posts = await getPosts();

    return (
        <section className="p-4 md:px-12 md:py-8">
            <h3 className="text-3xl mb-4">Newest posts</h3>
            {posts.map((post: Post, key: number) => (
                <PostComponent key={key} post={post} />
            ))}
        </section>
    )
}