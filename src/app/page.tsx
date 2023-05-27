import Link from 'next/link';

export default function Home() {
  return (
    <section className='flex flex-col min-h-[50vh]'>
      <h1 className='text-5xl pb-2'>
        Welcome!
      </h1>
      <p>This is my <i>sample project</i> about blog posts. View my code at <Link className='blue-link' href={'https://github.com/simzas/blog-sample'}>GitHub</Link>.</p>
      <p>It uses <Link className="blue-link" href={'https://jsonplaceholder.typicode.com/'} target='blank'>JSON Placeholder API</Link> to get data.</p>
      <Link href={'/posts'} className='self-center rounded-lg border-2 border-slate-200 p-4 my-8 hover:bg-slate-900'>Show me</Link>
    </section>
  )
}
