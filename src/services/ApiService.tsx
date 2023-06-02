"use server"

/* import { useState } from 'react';

const ApiService = () => {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        let plainPosts = await loadPlainPosts();
        let users = await loadUsers();

        if (plainPosts !== undefined || users !== undefined) {

            if (plainPosts.length > 0 && users.length > 0) {
                const posts = plainPosts.map(post => {
                    const { userId, id, title, body } = post;
                    const user = users.find(user => user.id === userId);
                    const username = user ? user.username : '';
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

                return posts;
            } else {
                return [];
            }
        } else {
            console.log("its undefined");
            return [];
        }
    }

    async function loadPlainPosts() {
        let plainPosts;

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((json) => plainPosts = json)
            .catch((e) => { console.log("Error loading plain posts: ", e) });

        console.log(plainPosts);
        return plainPosts;
    }

    async function loadUsers() {
        let users;

        await fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((json) => users = json)
            .catch((e) => { console.log("Error loading users: ", e) });

        console.log(users);
        return users;
    }

}; */


/* export default ApiService; */

/* 
export default async function getPosts() {
    let plainPosts = await loadPlainPosts();
    let users = await loadUsers();

    if (plainPosts !== undefined || users !== undefined) {

        if (plainPosts.length > 0 && users.length > 0) {
            const posts = plainPosts.map(post => {
                const { userId, id, title, body } = post;
                const user = users.find(user => user.id === userId);
                const username = user ? user.username : '';
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

            return posts;
        } else {
            return [];
        }
    } else {
        console.log("its undefined");
        return [];
    }
} */

class ApiService {
    url;

    constructor(url: string) {
        this.url = url;
    }

    async fetchData(endpoint: string, options: RequestInit) {
        const data = await fetch(`${this.url}/${endpoint}`, options)
            .then((data) => data.json())
            .catch((e) => { console.log(`Error loading ${endpoint}: `, e) });
        return data;
    }

    async get(endpoint: string) {
        const options = {
            method: 'GET',
        };
        return this.fetchData(endpoint, options);
    }

    async post(endpoint: string, body: any) {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.fetchData(endpoint, options);
    }

    async put(endpoint: string, body: any) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.fetchData(endpoint, options);
    }

    async delete(endpoint: string) {
        const options = {
            method: 'DELETE',
        };
        return this.fetchData(endpoint, options);
    }

    async getPosts(): Promise<Post[]> {
        let plainPosts = await this.get('posts');
        let users = await this.get('users');

        if (plainPosts !== undefined || users !== undefined) {

            if (plainPosts.length > 0 && users.length > 0) {
                const posts = plainPosts.map(((post: Post) => {
                    const { userId, id, title, body } = post;
                    const user = users.find((user: any) => user.id === userId);
                    const username = user ? user.username : '';
                    const website = user ? user.website : '';
                    const city = user ? user.address.city : '';

                    return {
                        id,
                        userId,
                        title,
                        body,
                        username,
                        website,
                        city
                    };
                }));

                return posts;
            } else {
                return [];
            }
        } else {
            console.log("its undefined");
            return [];
        }
    }
}

export default ApiService;