"use server"

import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
            </ul>
            <div className='about'>
                <Link href={'/about'}>About</Link>
            </div>
        </nav>
    )
}

export default Navbar;