"use server"

import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <nav className='
        flex flex-row 
        justify-center align-center px-4 mt-2 py-4 
        sm:flex-row sm:py-6 sm:mt-6
        text-md text-slate-400 border-t-[1px] border-neutral-800 bg-[#060815]'>
            <div>Copy<span className='line-through text-slate-600'>right</span>left 2023 by <Link href={'https://github.com/simzas'} className='cursor-pointer'>Šimon Zasadil</Link></div>
        </nav>
    )
}

export default Footer;