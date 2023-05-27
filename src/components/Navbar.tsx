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
                <li className='px-4 py-4 sm:py-0 hover:underline'>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='px-4 py-4 sm:py-0 hover:underline'>
                    <Link href={'/posts'}>Posts</Link>
                </li>
            </ul>
            <ul className='flex flex-col sm:flex-row align-center'>
                <li className='px-4 py-4 sm:py-0 hover:underline'>
                    <Link href={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;