import React from 'react'
import { MdError } from 'react-icons/md'

const Input = ({label, name, type, placeholder, onChange, value, defaultValue, errorMessage}) => {
  return (
    <div className='flex flex-col mt-4'>
        {label && <label className='font-semibold px-1 text-sm' htmlFor={name}>{label}</label>}
        <input name={name} type={type} value={value} defaultValue={defaultValue} onChange={onChange} placeholder={placeholder} className='text-sm font-medium placeholder:text-slate-500 dark:placeholder:text-gray-300  h-9 mt-1 px-2 rounded-md bg-palette-gray dark:bg-palette-darkgray outline-none border-2 border-transparent focus:border-palette-blue dark:focus:border-palette-yellow' />
        {errorMessage && <p className='text-red-700 flex items-center gap-1 px-1 text-sm font-medium mt-1'><MdError /> {errorMessage}</p>}
    </div>
  )
}

export default Input