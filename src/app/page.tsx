import React from 'react';
import Link from 'next/link';

export default function Home(): unknown {
  return (
    <section className="flex flex-col mx-4 my-2">
      <h1 className="my-4 text-5xl">Welcome!</h1>
      <p className="my-1">
        This is my <i>sample project</i> about blog posts. View my code at{' '}
        <Link
          className="blue-link"
          href={'https://github.com/simzas/blog-sample'}
        >
          GitHub
        </Link>
        .
      </p>
      <p className="my-1">
        It uses{' '}
        <Link
          className="blue-link"
          href={'https://jsonplaceholder.typicode.com/'}
          target="_blank"
        >
          JSON Placeholder API
        </Link>{' '}
        to get data.
      </p>
      <Link
        href={'/posts'}
        className="self-center p-4 my-8 border-2 rounded-lg border-slate-200 hover:bg-slate-900"
      >
        Show me
      </Link>
    </section>
  );
}
