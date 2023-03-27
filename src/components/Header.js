
import React, { useState } from 'react'
import logo from '../assets/logo.png'

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
            <h3>&#x1f1f3; EN</h3>
            <button onClick={()=>setIsLog(!isLog)}>
                { (isLog) ? 'Log out' : 'Log in'}
            </button>
        </div>

        <div>
            <h2 className='font-bold '>Cart</h2>
        </div>
        
    </div>
  )
}

export default Header
