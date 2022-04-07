import React from 'react'
import Navbar from '../Navbar'

const Page = ({ children }) => {
    return (
        <div className='w-screen max-w-full h-auto'>
            <Navbar />
            <main className='w-full h-auto min-h-screen'>
                {children}
            </main>
        </div>
    )
}

export default Page