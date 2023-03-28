
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import india from '../assets/india.jpg'
const Header = () => {


    const [isLog, setIsLog] = useState(false)

    return (
        <div className='flex justify-around items-center bg-[#131A22] text-white'>
            <div>
                <img alt='logo.png' src={logo} className="w-28 invert" />
            </div>

            <div className='basis-1/2'>
                <input type='text' placeholder='search' className='p-2 w-[100%] border border-black rounded-sm' />
            </div>

            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <img alt='india.jpg' className='w-[20px]' src={india} />
                    <h3> EN</h3>
                </div>
                <button onClick={() => setIsLog(!isLog)}>
                    {(isLog) ? 'Log out' : 'Log in'}
                </button>
            </div>

            <div>
                <h2 className='font-bold '>Cart</h2>
            </div>

        </div>
    )
}

export default Header
