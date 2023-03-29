
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../utils/cartSlice'

const Card = ({ productDedails }) => {

    const [toggleRead, setToggleRead] = useState(false)
    const [toggleTitle, setToggleTitle] = useState(false)

    const { title, price, description, image } = productDedails


    // #######################################


    const dispatch = useDispatch()

    const dispatchToCart = () => {
        dispatch(addCart(productDedails))
    }
    

    // #######################################


    return (
        <div className="flex flex-col justify-center gap-2 p-10 max-w-[400px] bg-white rounded-lg shadow-2xl">
            <div className="">


                {
                    (!toggleTitle) ? <p className="text-2xl uppercase text-gray-900 font-bold">{title.slice(0, 40)}
                        <span onClick={() => setToggleTitle(true)} className='text-blue-400 text-sm lowercase cursor-pointer'> ...read more</span>
                    </p> : <p className="text-2xl uppercase text-gray-900 font-bold">{title}
                        <span onClick={() => setToggleTitle(false)} className='text-blue-400 text-sm lowercase cursor-pointer'> read less</span>
                    </p>
                }

                {
                    (!toggleRead) ? <p>{description.slice(0, 100)}
                        <span onClick={() => setToggleRead(true)} className='text-blue-400 font-semibold cursor-pointer'> ...read more</span>
                    </p> : <p>{description}
                        <span onClick={() => setToggleRead(false)} className='text-blue-400 font-semibold cursor-pointer'> read less</span>
                    </p>
                }
            </div>

            <div className='h-[230px]'>

                <img alt='img' src={image} className="h-[100%]" />
            </div>

            <div className="grid gap-10">

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">{Math.ceil(price * 82)} &#8377;</p>
                    <button onClick={()=>dispatchToCart()}
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add to cart</button>
                </div>
            </div>
        </div>




    )
}

export default Card
