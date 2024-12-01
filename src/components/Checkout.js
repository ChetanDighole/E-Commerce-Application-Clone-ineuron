import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const [totalValue, setTotalValue] = useState('')

    const cartContent = useSelector(store => store.cart.items)

    useEffect(() => {

        const getTotal = () => {
            let total = cartContent.reduce((accumulator, currentValue) => accumulator + Math.ceil((currentValue.price * 82)), 0)

            setTotalValue(total)
        }

        getTotal()
    }, [])

    const checkoutFunc = (e) => {
        e.preventDefault()
        alert("Order Placed Successfully")
    }

    return (
        // <div className=''>
        <div className='flex flex-col justify-center items-start lg:w-[600px] m-auto py-4 gap-4 px-4'>
            <div className='flex flex-col justify-between md:flex-row gap-4 w-[100%]'>
                <label for="firstName">First Name
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='text' placeholder='First Name' name='firstName' />
                </label>
                <label for="lastName">Last Name
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='text' placeholder='Last Name' name='lastName' />
                </label>
            </div>
            <div className='w-[100%]'>
                <label for='email'>Email
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='email' placeholder='example@xyz.com' name='email' />
                </label>
                <label for='phoneNo'>Phone Number
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='tel' placeholder='Phone Number' name='phoneNo' />
                </label>
            </div>
            <div className='w-[100%]'>
                <label for="Address"
                    className="block mb-3 text-sm font-semibold text-gray-500">Address
                    <textarea
                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="Address" cols="60" rows="4" placeholder="Address">
                    </textarea>
                </label>
            </div>
            <div className='flex flex-col justify-between  md:flex-row gap-4 w-[100%]'>
                <label for="city">City
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='text' placeholder='City Name' name='city' />
                </label>
                <label for="pinCode">Pin Code
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='text' placeholder='Pin Code' name='pinCode' />
                </label>
            </div>
            <div className='flex flex-col justify-between  md:flex-row gap-4 w-[100%]'>
                <label for='card'>Card Number
                    <input maxLength="16" className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='tel' placeholder='xxxx-xxxx-xxxx-xxxx' name='card' />
                </label>
                <label for='cvv'>CVV
                    <input className='w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600' type='tel' maxLength='3' placeholder='CVV' name='cvv' />
                </label>
            </div>
            <button type='submit' onClick={(e) => checkoutFunc(e)} className="text-lg font-semibold px-6 w-[100%] py-2 transition ease-in duration-200 uppercase rounded-lg hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Pay {totalValue} &#8377;</button>
        </div>
        // </div>
    )
}

export default Checkout
