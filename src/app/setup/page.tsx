import Link from "next/link";

export default function Setup() {
    return (
        <section className="sm:m-4 text-base">
            <p className="p-4">Author: <Link href={'https://github.com/simzas'} className="blue-link hover:underline">simzas</Link> / <Link href={'https://github.com/simzas/blog-sample'} className="blue-link font-semibold hover:underline">blog-sample</Link></p>
            <div className="sm:rounded-md sm:border-[1px] border-slate-800 border-t-[1px] border-x-[1px]">
                <h4 className="text-slate-400 text-sm p-4">Fake README.md file HUE HUE HUE</h4>
                <div className="border-b-[1px] border-slate-800"></div>
                <div className="m-4 sm:m-8 max-w-2xl">
                    <p>This is a <Link href="https://nextjs.org/" target="_blank" className="blue-link">Next.js</Link> project bootstrapped with <code className="bg-slate-800 px-2 py-1 rounded-lg min-w-36 max-w-48">create-next-app</code>.</p>

                    <h2 className="text-2xl mt-6 font-semibold">Getting Started</h2>
                    <div className="border-b-[1px] border-slate-800 mt-1 mb-4"></div>
                    <p>First, run the development server:</p>
                    <pre className="bg-slate-900 m-3 px-4 py-2 rounded">
                        <code>npm run dev</code>
                        <p className="text-slate-400"># or</p>
                        <code>yarn dev</code>
                        <p className="text-slate-400"># or</p>
                        <code>pnpm dev</code>
                    </pre>
                    <p className="py-2">Open <Link href={"http://localhost:3000"} target="_blank" className="blue-link">http://localhost:3000</Link> with your browser to see the result.</p>
                    <p className="py-2">You can start editing the page by modifying <code className="bg-slate-800 px-2 py-1 rounded-lg">app/page.tsx</code>. The page auto-updates as you edit the file.</p>
                    <p className="py-2">This project uses <Link href="https://nextjs.org/docs/basic-features/font-optimization" target="_blank" className="blue-link bg-slate-800 px-2 py-1 rounded-lg">next/font</Link> to automatically optimize and load Inter, a custom Google Font.</p>

                    <h2 className="text-2xl mt-6 font-semibold">Learn More</h2>
                    <div className="border-b-[1px] border-slate-800 mt-1 mb-4"></div>
                    <p className="py-2">To learn more about Next.js, take a look at the following resources:</p>
                    <p className="list-item ml-8"><Link href="https://nextjs.org/docs" target="_blank" className="blue-link" >Next.js Documentation</Link> - learn about Next.js features and API.</p>
                    <p className="list-item ml-8"><Link href="https://nextjs.org/learn" target="_blank" className="blue-link">Learn Next.js</Link> - an interactive Next.js tutorial.</p>
                    <p className="py-2">You can check out <Link href="https://github.com/vercel/next.js/" className="blue-link">the Next.js GitHub repository</Link> - your feedback and contributions are welcome!</p>

                    <h2 className="text-2xl mt-6 font-semibold">Deploy on Vercel</h2>
                    <div className="border-b-[1px] border-slate-800 mt-1 mb-4"></div>
                    <p className="py-2">The easiest way to deploy your Next.js app is to use the <Link href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme" target="_blank" className="blue-link">Vercel Platform</Link> from the creators of Next.js.</p>
                    <p className="py-2">Check out our <Link href="https://nextjs.org/docs/deployment" target="_blank" className="blue-link">Next.js deployment documentation</Link> for more details.</p>
                </div>
            </div>
        </section>
    )
}