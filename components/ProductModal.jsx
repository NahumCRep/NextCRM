import React from 'react'
import axios from 'axios'
import { FaTimes } from 'react-icons/fa'
import Input from './Input'

const ProductModal = ({ showModal, setShowModal }) => {

    const addProduct = (event) => {
        event.preventDefault()
        axios.post("/api/products/create", {
            name: event.target.name.value,
            price: Number.parseFloat(event.target.price.value),
            description: event.target.description.value,
            img: event.target.img.value,
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <div className={`${showModal ? "flex":"hidden"} fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-60 items-center justify-center`}>
            <div className='relative w-[80%] md:w-[40%] h-auto bg-palette-white dark:bg-palette-black p-6'>
                <button onClick={() => setShowModal(false)} className='absolute right-5 top-6 outline-none border-none text-red-600'><FaTimes size={30} /></button>
                <form onSubmit={addProduct} className="flex flex-col">
                    <h1 className='font-oswald text-2xl mb-5 text-palette-blue dark:text-palette-yellow'>Add Product</h1>
                    <Input label={"Name"} name={"name"} type={"text"} />
                    <Input label={"Image URL"} name={"img"} type={"text"} />
                    <Input label={"Price"} name={"price"} type={"text"} />
                    <Input label={"Description"} name={"description"} type={"text"} />
                    <button className='h-10 mt-6 bg-palette-blue dark:bg-palette-yellow text-palette-white font-raleway font-semibold'>Accept</button>
                </form>
            </div>
        </div>
    )
}

export default ProductModal