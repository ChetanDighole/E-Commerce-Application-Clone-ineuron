
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FAKE_STORE_URL } from '../helper'
import { addCart } from '../utils/cartSlice'

const Product = () => {

    const [productDetail, setProductDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {

        const getProductDetails = async () => {
            const data = await fetch(FAKE_STORE_URL + '/' + id)
            const json = await data.json()
            setProductDetail(json)
        }

        getProductDetails()

    }, [id])
    const dispatch = useDispatch()

    const dispatchToCart = () => {
        dispatch(addCart(productDetail))
    }

    return (
        <div >
            <div className='flex flex-col md:flex-row gap-5 m-10 p-10'>
                <img alt='img' className='w-[400px] rounded-lg' src={productDetail.image} />
                <div className='flex flex-col gap-4'>
                    <h1 className='text-4xl uppercase text-gray-900 font-bold'>{productDetail.title}</h1>
                    <h2>{productDetail.description}</h2>
                    <h2 className='text-2xl uppercase text-gray-900 font-bold'>{productDetail?.rating?.rate} ⭐</h2>
                    <h2 className='text-2xl uppercase text-gray-900 font-bold'>{Math.ceil(productDetail.price * 82)} &#8377;</h2>
                    <button onClick={() => dispatchToCart()}
                    className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-yellow-300 hover:text-white border-2 border-gray-900 hover:border-yellow-400 focus:outline-none">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
