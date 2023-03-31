
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCart } from '../utils/cartSlice'

const Card = ({ productDedails, cartCard }) => {

    const [toggleTitle, setToggleTitle] = useState(false)

    const { title, price, description, image, id } = productDedails


    const dispatch = useDispatch()

    const dispatchToCart = () => {
        dispatch(addCart(productDedails))
    }

    const navigate = useNavigate()
    const productViewDetails = () => {
        navigate('/product/' + id)
    }


    return (
        <div className="flex flex-col justify-center gap-2 p-10 max-w-[400px] bg-white rounded-lg shadow-2xl">
            <div className="">

                {
                    (!toggleTitle) ? <p className="text-2xl uppercase text-gray-900 font-bold">{title.slice(0, 30)}
                        <span onClick={() => setToggleTitle(true)} className='text-blue-400 text-sm lowercase cursor-pointer'> ⬇️expand</span>
                    </p> : <p className="text-2xl uppercase text-gray-900 font-bold">{title}
                        <span onClick={() => setToggleTitle(false)} className='text-blue-400 text-sm lowercase cursor-pointer'> ⬆️shrink</span>
                    </p>
                }

                <p>{description.slice(0, 40)}....</p>

            </div>

            <div className='h-[230px]'>

                <img alt='img' src={image} className="h-[100%]" />
            </div>

            <div className="grid gap-10">

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">{Math.ceil(price * 82)} &#8377;</p>

                    <button onClick={() => productViewDetails()}
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">View Details</button>
                </div>
                <button onClick={() => dispatchToCart()}
                    className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-yellow-300 hover:text-white border-2 border-gray-900 hover:border-yellow-400 focus:outline-none">{(cartCard) ? 'Add One More' : "Add to Cart"}</button>
            </div>
        </div>




    )
}

export default Card
