"use client"

import PostComponent from '../../components/Post'
import getPosts from '../../services/ApiServices'

//const queryClient = new QueryClient()

export default async function Post() {

    //TODO přepsat
    let posts = await getPosts();

    /* const { status, data, error, isFetching } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const posts = await getPosts();
            return posts;
        }
    }) */

    return (
        <section className="p-4 md:px-12 md:py-8">
            <h3 className="text-3xl mb-4">Newest posts</h3>
            {posts.map((post: any, key = post.id) => (
                <PostComponent post={post} key={key} />
            ))}
            {/* TODO comments: https://jsonplaceholder.typicode.com/posts/1/comments */}
        </section>
    )
}