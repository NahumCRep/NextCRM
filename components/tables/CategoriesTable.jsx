import React from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const CategoriesTable = ({categories}) => {
    return (
        <table className='w-full max-h-[300px] font-raleway bg-palette-gray dark:bg-palette-darkgray'>
            <thead>
                <th className='w-[5%] h-10 border-r-2 border-palette-white dark:border-palette-black'>No.</th>
                <th className=' h-10 border-r-2 border-palette-white dark:border-palette-black '>Categoria</th>
                <th className='w-[25%] h-10'>options</th>
            </thead>
            <tbody className='h-48 text-sm'>
                {
                    categories && (
                        categories.map((categorie, i) => {
                            return (
                                <tr key={categorie.id} className="bg-slate-200  dark:bg-palette-darker h-10">
                                    <td className='tableCell'>{i + 1}</td>
                                    <td className='tableCell'>{categorie.name}</td>
                                    <td className='tableCell'>edit delete</td>
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
                    <td className='flex h-14 items-center gap-2 justify-end'>
                        <button className='w-7 h-7 flex items-center justify-center'><MdOutlineArrowBackIos size={15} /></button>
                        <p className='text-sm'>1 / 1</p>
                        <button className='w-7 h-7 flex items-center justify-center'><MdOutlineArrowForwardIos size={15} /></button>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default CategoriesTable