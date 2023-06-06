'use server';

import React from 'react';
import PostComponent from '../../components/PostComponent';
import ApiService from '@/services/ApiService';

export default async function Post(): Promise<unknown> {
  const posts = await ApiService.getInstance().getPosts();

  return (
    <section className="p-4 md:px-12 md:py-8">
      <h3 className="mb-4 text-3xl">Newest posts</h3>
      {posts.map((post: Post, key: number) => (
        <PostComponent key={key} post={post} />
      ))}
    </section>
  );
}
