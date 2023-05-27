"use server"

import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className='flex 
        flex-col 
        sm:flex-row sm:py-6 sm:mb-6
        justify-between align-center px-4 mb-2 py-4 
        border-b-2 border-neutral-800 text-xl'>
            <ul className='flex flex-col sm:flex-row align-center'>
                <Link href={'/'} className='px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer'>Home</Link>
                <Link href={'/posts'} className='px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer'>Posts</Link>
            </ul>
            <ul className='flex flex-col sm:flex-row align-center'>
                <Link href={'/about'} className='px-4 py-4 sm:py-0 sm:hover:underline hover:bg-slate-800 sm:hover:bg-transparent hover:cursor-pointer'>About</Link>
            </ul>
        </nav>
    )
}

export default Navbar;