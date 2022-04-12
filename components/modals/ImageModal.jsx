import React from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'
import Spinner from '../Spinner'

const ImageModal = ({ showModal, setShowModal, image }) => {
    return (
        <div className={`${showModal ? "flex" : "hidden"} fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-60 items-center justify-center`}>
            <div className='relative w-[80%] md:w-[40%] h-[70%] bg-palette-white dark:bg-palette-black p-6'>
                <button onClick={() => setShowModal(false)} className='absolute z-30 right-5 top-6 outline-none border-none text-red-600'><FaTimes size={30} /></button>
                {image 
                    ? <Image src={`${image}`} alt="proyect image" layout='fill' objectFit='fit' />
                    : <Spinner />
                }            
            </div>
        </div>
    )
}

export default ImageModal