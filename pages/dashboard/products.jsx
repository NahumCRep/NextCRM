import React, { useState, useEffect } from 'react'
import DashboardPage from '../../components/templates/DashboardPage'
import ProductModal from '../../components/modals/ProductModal'
import CategoryModal from '../../components/modals/CategoryModal'
import CategoriesTable from '../../components/tables/CategoriesTable'
import ProductsTable from '../../components/tables/ProductsTable'
import { FaPlus } from 'react-icons/fa'

import axios from 'axios'
import Spinner from '../../components/Spinner'

export async function getServerSideProps({ req }) {
    const secure = req.connection.encrypted
    const categoryURL = `${secure ? "https" : "http"}://${req.headers.host}/api/category`
    const cateogryRes = await axios.get(categoryURL)

    const productsURL = `${secure ? "https" : "http"}://${req.headers.host}/api/products`
    const productsRes = await axios.get(productsURL)
    console.log('axios product', productsRes)

    return {
        props: {
            categories: cateogryRes.data,
            products: productsRes.data
        }
    }
}

const DashboardProducts = ({ categories, products }) => {
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [allProducts, setAllProducts] = useState(products)
    const [allCategories, setAllCategories] = useState(categories)

    const refreshProducts = () => {
        axios.get('/api/products')
            .then(res => setAllProducts(res.data))
    }

    const refreshCategories = () => {
        axios.get('/api/category')
            .then(res => setAllCategories(res.data))
    }

    useEffect(() => {
        console.log('categories', categories)
        console.log('products', products)
    }, [])
    return (
        <DashboardPage>
            <section className='py-4 px-8'>
                <div className='bg-slate-200 dark:bg-palette-darker p-3 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-oswald text-xl'>Categories</h1>
                        {!categories && <Spinner />}
                    </div>
                    <button onClick={() => setIsCategoryModalOpen(true)} className='w-8 h-8 bg-palette-blue text-white flex items-center justify-center'><FaPlus size={20} /></button>
                </div>
                <CategoriesTable categories={allCategories} />
            </section>
            <section className='py-4 px-8'>
                <div className='bg-slate-200 dark:bg-palette-darker p-3 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <h1 className='font-oswald text-xl'>Products</h1>
                        {!products && <Spinner />}
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className='w-8 h-8 bg-palette-blue text-white flex items-center justify-center'><FaPlus size={20} /></button>
                </div>
                <ProductsTable products={allProducts} categories={allCategories} />
            </section>
            <CategoryModal showModal={isCategoryModalOpen} setShowModal={setIsCategoryModalOpen} refreshData={refreshCategories} />
            <ProductModal showModal={isModalOpen} setShowModal={setIsModalOpen} refreshData={refreshProducts} />
        </DashboardPage>
    )
}

export default DashboardProducts