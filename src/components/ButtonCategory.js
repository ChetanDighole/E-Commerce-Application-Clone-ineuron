
import React from 'react'
import { useDispatch } from 'react-redux'
import { categoryList } from '../helper'

import { filterData } from '../utils/filterSlice'

const ButtonCategory = ({ product }) => {

    const categories = categoryList(product, 'category')

    const dispatch = useDispatch()

    function handleClick (text){
        dispatch(filterData( {product , text} ))
    }
 
    return (
        <div className='flex justify-center items-center gap-4 p-2'>

            {
                categories.map((eachEle, index) => (
                    <button onClick={(e)=>handleClick(e.target.innerHTML)} key={index} className='bg-[#232F3E] text-white font-semibold py-2 px-4 rounded-md'>{eachEle}</button>
                ))
            }

        </div>
    )
}

export default ButtonCategory

