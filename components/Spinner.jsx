import React from 'react'

const Spinner = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex justify-center items-center gap-3'>
            <div className='w-2 h-2 animate-largeBounceUp  rounded-full bg-palette-blue dark:bg-palette-yellow'></div>
            <div className='w-2 h-2 animate-largeBounceDown  rounded-full bg-palette-blue dark:bg-palette-yellow'></div>
            <div className='w-2 h-2 animate-largeBounceUp translate-y-2  rounded-full bg-palette-blue dark:bg-palette-yellow'></div>
        </div>
    </div>
  )
}

export default Spinner