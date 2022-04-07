import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='w-[40px] h-[40px] bg-white cursor-pointer relative rounded-full overflow-hidden'>
            <div className={`absolute top-[0.6rem] left-1/2 -translate-x-1/2 flex flex-col gap-5 justify-center items-center transition-all duration-700 ease-in-out ${theme === 'dark' && 'rotate-180'}`}>
                <FaMoon size={20} color='#000000' />
                <FaSun size={20} color='#000000' />
            </div>
        </div>
    )
}

export default ToggleTheme