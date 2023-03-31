
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import india from '../assets/india.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FAKE_STORE_URL , filterResult } from '../helper';

const Header = () => {

    const [inputSearch, setInputSearch] = useState('')

    const [listDisplay, setListDisplay] = useState(false)

    const [isLog, setIsLog] = useState(false)

    const cart = useSelector(store => store.cart.items)

    const [bigData, setBigData] = useState([])

    useEffect(()=>{


        const timer = setTimeout(() => 
            
            searchDataResult()

        , 1000);

        return() => {clearTimeout(timer)}


    },[inputSearch])

    const searchDataResult = async () => {
        const data = await fetch(FAKE_STORE_URL)
        const json = await data.json()
        const searhResult = filterResult(json , inputSearch)
        setBigData(searhResult)
    }

    return (
        <div className='flex justify-around items-center bg-[#131921] text-white font-bold'>
            <div>
                <a href='/'><img alt='logo.png' src={logo} className="w-28" /></a>
            </div>

            <Link to={'/'}>
                <h3>Home</h3>
            </Link>

            <div className='basis-1/2 hidden md:block'>
                <input
                    onFocus={() => setListDisplay(true)}
                    onBlur={() => setListDisplay(false)}
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    type='text' placeholder='Check If Your Product Is In Stock Or Not...' className='p-2 w-[100%] text-gray-900 border border-black rounded-sm' />

                {
                    (listDisplay) ? 
                    <div className='absolute bg-slate-200 mx-6 max-w-[700px]'>
                        {
                            bigData.map((eachEle,index) => 

                                <li key={index} className="list-none border border-b-1 border-slate-400 text-[#131921]">✅ {eachEle.title}</li>
                            
                            )
                        }
                    </div> : <></>
                }


            </div>

            <div className='hidden md:flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <img alt='india.jpg' className='w-[20px]' src={india} />
                    <h3>EN</h3>
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
