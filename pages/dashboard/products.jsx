import React, { useState } from 'react'
import DashboardPage from '../../components/templates/DashboardPage'
import ProductModal from '../../components/ProductModal'
import { FaPlus } from 'react-icons/fa'

const DashboardProducts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }
    return (
        <DashboardPage>
            <section className='py-4 px-8'>
                <div className='bg-slate-200 dark:bg-palette-darker p-3 flex justify-between items-center'>
                    <h1 className=' font-oswald text-xl'>Categories</h1>
                    <button onClick={() => setIsModalOpen(true)} className='w-8 h-8 bg-palette-blue text-white flex items-center justify-center'><FaPlus size={20} /></button>
                </div>
            </section>
            <section className='py-4 px-8'>
                <div className='bg-slate-200 dark:bg-palette-darker p-3 flex justify-between items-center'>
                    <h1 className=' font-oswald text-xl'>Products</h1>
                    <button onClick={() => setIsModalOpen(true)} className='w-8 h-8 bg-palette-blue text-white flex items-center justify-center'><FaPlus size={20} /></button>
                </div>

            </section>
            <ProductModal showModal={isModalOpen} setShowModal={setIsModalOpen} />
        </DashboardPage>
    )
}

export default DashboardProducts