import React, { useState, useEffect } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { BsGearFill } from 'react-icons/bs'
import ImageModal from '../modals/ImageModal'

const ProductsTable = ({ products, categories }) => {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState('')

    const setImage = (imgUrl) => {
        setCurrentImage(imgUrl)
        setIsImageModalOpen(true)
    }

    const getCategoryName = (categoryID) => {
        let foundedCategory = categories.find((catg) => catg.id == categoryID)
        return foundedCategory.name
    }
    return (
        <>
            <table className='w-full max-h-[300px] font-raleway bg-palette-gray dark:bg-palette-darkgray'>
                <thead>
                    <th className='w-[5%] h-10 border-r-2 border-palette-white dark:border-palette-black'>No.</th>
                    <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Title</th>
                    <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Desciption</th>
                    <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Image</th>
                    <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Category</th>
                    <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Price</th>
                    <th className='w-[10%] h-10'>options</th>
                </thead>
                <tbody className='h-48 text-sm'>
                    {
                        products && (
                            products.map((product, i) => {
                                return (
                                    <tr key={product.id} className="bg-slate-200 min-h-10 dark:bg-palette-darker h-10">
                                        <td className='tableCell'>{i + 1}</td>
                                        <td className='tableCell'>{product.name}</td>
                                        <td className='tableCell'><p className='truncate'>{product.description}</p></td>
                                        <td className='tableCell'><button onClick={() => setImage(product.img)} className='p-2 text-white bg-palette-blue dark:bg-black'>image</button></td>
                                        <td className='tableCell'>{getCategoryName(product.category)}</td>
                                        <td className='tableCell'>{product.price}</td>
                                        <td className='tableCell'><button className='text-palette-blue  dark:text-palette-yellow'><BsGearFill size={20} /></button></td>
                                    </tr>
                                )
                            })
                        )
                    }
                </tbody>
                <tfoot className='h-14 bg-palette-gray dark:bg-palette-darkgray '>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='flex h-14 items-center gap-2 justify-center'>
                            <button className='w-7 h-7 flex items-center justify-center'><MdOutlineArrowBackIos size={15} /></button>
                            <p className='text-sm'>1 / 1</p>
                            <button className='w-7 h-7 flex items-center justify-center'><MdOutlineArrowForwardIos size={15} /></button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <ImageModal showModal={isImageModalOpen} setShowModal={setIsImageModalOpen} image={currentImage} />
        </>
    )
}

export default ProductsTable