
import React, { useState } from 'react'

const Card = ({ productDedails }) => {

    const [toggleRead, setToggleRead] = useState(false)

    const { title, price, description, image } = productDedails

    return (


        <div className="flex flex-col justify-center gap-2 p-10 max-w-[400px] bg-white rounded-lg shadow-2xl">
            <div className="">
                <p className="text-2xl uppercase text-gray-900 font-bold">{title}</p>
                {
                    (!toggleRead)? <p>{description.slice(0,100)}
                    <span onClick={()=>setToggleRead(true)} className='text-blue-400 font-semibold cursor-pointer'> ...read more</span>
                    </p> : <p>{description}</p>
                }
            </div>

            <img alt='img' src={image} className="w-[230px]" />

            <div className="grid gap-10">

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p className="font-bold text-xl">{Math.ceil(price * 82)} &#8377;</p>
                    <button
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                        to cart</button>
                </div>
            </div>
        </div>




    )
}

export default Card
