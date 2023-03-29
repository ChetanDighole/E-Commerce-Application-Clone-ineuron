
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import india from '../assets/india.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const [isLog, setIsLog] = useState(false)

    const cart = useSelector(store => store.cart.items)

    return (
        <div className='flex justify-around items-center bg-[#131921] text-white font-bold'>
            <div>
                <a href='/'><img alt='logo.png' src={logo} className="w-28 invert" /></a>
            </div>

            <Link to={'/'}>
            <h3>Home</h3>
            </Link>

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

            <Link to={'/cart'}>Cart <span className='bg-white text-[#131921] p-1 rounded'>{cart.length}</span></Link>

        </div>
    )
}

export default Header
