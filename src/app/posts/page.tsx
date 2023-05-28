"use client"
import Link from "next/link";
import { useEffect, useState } from "react"

interface Posts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface Post {
    userID: number;
    postID: number;
    title: string;
    body: string;
    username: string;
    website: string;
    city: string;
}

function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex: number;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default function Post() {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [post, setPost] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(shuffle(json)));
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));
    }, []);

    useEffect(() => {
        if (posts.length > 0 && users.length > 0) {
            const combinedData = posts.map(post => {
                const { userId, id, title, body } = post;
                const user = users.find(user => user.id === userId);
                const username = user ? user.username : 'anonymous';
                const website = user ? user.website : '';
                const city = user ? user.address.city : '';

                return {
                    userID: userId,
                    postID: id,
                    title,
                    body,
                    username,
                    website,
                    city
                };
            });

            console.log(combinedData);
            setPost(combinedData);
        }
    }, [posts, users]);

    return (
        <section className="p-4 md:px-12 md:py-8">
            <h3 className="text-3xl mb-4">Newest posts</h3>
            {post.map((post) => (
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
            ))}
            {/* TODO comments: https://jsonplaceholder.typicode.com/posts/1/comments */}

            {/* TODO skeleton loading animation */}
            {posts.length == 0 &&
                <>
                    <div className="py-4 md:min-w-[600px]">
                        <div className="bg-slate-900 rounded border-[1px] border-slate-700
                        hover:border-slate-600">
                            <p className="px-4 pt-4 text-2xl">Title</p>
                            <p className="px-4 py-2 text-slate-400 text-sm">Author</p>
                            <div className="border-b-[1px] border-slate-800 my-1"></div>
                            <div className="p-4">
                                <span>Yo mama, to all you niggas, que pasa amigo yeeeeeehaa!</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 md:min-w-[600px]">
                        <div className="bg-slate-900 rounded border-[1px] border-slate-700
                        hover:border-slate-600">
                            <p className="px-4 pt-4 text-2xl">Title</p>
                            <p className="px-4 py-2 text-slate-400 text-sm">Author</p>
                            <div className="border-b-[1px] border-slate-800 my-1"></div>
                            <div className="p-4">
                                <span>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 md:min-w-[600px]">
                        <div className="bg-slate-900 rounded border-[1px] border-slate-700
                        hover:border-slate-600">
                            <p className="px-4 pt-4 text-2xl">Title</p>
                            <p className="px-4 py-2 text-slate-400 text-sm">Author</p>
                            <div className="border-b-[1px] border-slate-800 my-1"></div>
                            <div className="p-4">
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                            </div>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}