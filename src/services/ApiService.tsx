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
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    private async fetchData(endpoint: string, options: RequestInit): Promise<any> {
        try {
            const response = await fetch(`${this.url}/${endpoint}`, options);
            if (!response.ok) {
                throw new Error(`Error loading ${endpoint}: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    public async get(endpoint: string): Promise<any> {
        const options = {
            method: 'GET',
        };
        return this.fetchData(endpoint, options);
    }

    public async post(endpoint: string, body: any): Promise<any> {
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.fetchData(endpoint, options);
    }

    public async put(endpoint: string, body: any): Promise<any> {
        const options = {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        return this.fetchData(endpoint, options);
    }

    public async delete(endpoint: string): Promise<void> {
        const options = {
            method: 'DELETE',
        };
        return this.fetchData(endpoint, options);
    }

    public async getPosts(): Promise<Post[]> {
        const plainPosts: Post[] = await this.get('posts');
        const users: User[] = await this.get('users');
        try {
            const posts: Post[] = plainPosts.map(((post: Post) => {
                const { userId, id, title, body } = post;
                const user = users[userId];
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
        } catch (e) {
            console.log(e);
            return [];
        }
    }

    public async getUserProfile(id: number): Promise<User> {
        const user: User = await this.get(`/users/${id}`);
        return user;
    }
}

export default ApiService;