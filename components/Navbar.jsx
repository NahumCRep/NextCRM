import React, { useEffect, useState } from 'react'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'
import { SiHandshake } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiShakingHands } from 'react-icons/gi'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const { data: session } = useSession()
    useEffect(() => {
        console.log(session)
    }, [])
    return (
        <nav className='w-full h-16 relative bg-palette-blue dark:bg-palette-black px-9 flex items-center justify-between '>
            <div className='flex items-center text-white'>
                <p className='font-oswald font-bold text-3xl'>CR</p>
                <SiHandshake size={25} />
            </div>
            <div className='flex items-center h-full'>
                <div className={`h-screen transition-width duration-700 ease-in-out ${isNavOpen ? 'w-1/2':'w-0'} absolute overflow-hidden top-16 right-0 flex flex-col-reverse items-center gap-8 pt-4 md:w-auto md:h-full md:static md:flex-row md:pt-0 md:bg-transparent bg-palette-darkblue dark:bg-palette-black`}>
                    <ul className='font-raleway text-lg font-semibold h-full w-full flex flex-col gap-6 items-center md:w-auto md:flex-row'>
                        <li className='w-auto md:h-full flex items-center'>
                            <Link href='/'><a><button className='navLink'>Home</button></a></Link>
                        </li>
                        <li className='w-auto md:h-full flex items-center'>
                            <Link href='/'><a><button className='navLink'>Products</button></a></Link>
                        </li>
                        <li className='dark:text-palette-yellow w-auto md:h-full flex items-center'>
                            {
                                session
                                    ? <button onClick={() => signOut()}>logout</button>
                                    : (
                                        <Link href='/login' passHref>
                                            <a><button className='bg-palette-litghblue text-white dark:bg-palette-darkgray dark:text-palette-yellow w-24 h-10 rounded-lg font-bold'>Sign In</button></a>
                                        </Link>
                                    )
                            }
                        </li>
                    </ul>
                    <ToggleTheme />
                </div>
                <button onClick={()=>setIsNavOpen(!isNavOpen)} className='md:hidden outline-none border-none text-palette-white dark:text-palette-yellow'>{isNavOpen ? <FaTimes size={30} /> : <FaBars size={30} />}</button>
            </div>
        </nav>
    )
}

export default Navbar