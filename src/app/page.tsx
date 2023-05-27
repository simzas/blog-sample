import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 >
        Welcome!
      </h1>
      <p>This is my sample project of blog posts.</p>
      <p>It uses <Link href={'https://jsonplaceholder.typicode.com/'} target='blank'>JSON Placeholder API</Link> to get data.</p>
      <div>Go to <Link href={"/posts"} className='hover:underline'>posts</Link></div>
    </>
  )
}
