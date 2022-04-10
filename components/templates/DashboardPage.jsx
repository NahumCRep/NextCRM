import React from 'react'
import Link from 'next/link'
import { MdDashboard, MdArrowForwardIos } from 'react-icons/md'
import { FaUsers, FaShoppingBag } from 'react-icons/fa'

const DashboardPage = ({ children }) => {
    return (
        <section className='h-auto min-h-screen flex'>
            <aside className='w-[18%] h-full min-h-screen bg-palette-darkblue dark:bg-black px-4'>
                <h1 className='font-oswald text-3xl py-4 text-palette-white border-b-2 border-palette-white dark:border-palette-yellow'>Dashboard</h1>
                <ul className='font-raleway font-medium text-palette-white w-full mt-2'>
                    <li><Link href='/dashboard'>
                        <a>
                            <div className='dashLink'><span className='text-palette-yellow'><MdDashboard size={25} /></span> Home</div>
                        </a>
                    </Link></li>
                    <li><Link href="/dashboard/users">
                        <a>
                            <div className='dashLink'><span className='text-palette-yellow'><FaUsers size={25} /></span> Users</div>
                        </a>
                    </Link></li>
                    <li><Link href="/dashboard/products">
                        <a>
                            <div className='dashLink'><span className='text-palette-yellow'><FaShoppingBag size={25} /></span> Products</div>
                        </a>
                    </Link></li>
                </ul>
            </aside>
            <main className='flex-grow h-auto min-h-screen'>
                {children}
            </main>
        </section>
    )
}

export default DashboardPage