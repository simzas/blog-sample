import React from 'react';
import LoadingPostComponent from '@/components/LoadingPostComponent';

export default function Loading(): unknown {
  return (
    <section className="p-4 md:px-12 md:py-8">
      <h3 className="mb-4 text-3xl">Newest posts</h3>
      {[...Array(10).keys()].map((i) => (
        <LoadingPostComponent key={i} />
      ))}
    </section>
  );
}
