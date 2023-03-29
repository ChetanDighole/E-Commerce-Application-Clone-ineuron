
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FAKE_STORE_URL } from '../helper'
import ButtonCategory from './ButtonCategory'
import Card from './Card'

const MainContainer = () => {

    useEffect(() => {

        async function func() {
            const data = await fetch(FAKE_STORE_URL)

            const json = await data.json()

            setProducts(json)

        }

        func()

    }, [])


    const [products, setProducts] = useState([])

    const filterProduct = useSelector(store => store.filter.items)



    return (
        <div>

            <div className='p-4'>

                <ButtonCategory product={products} />
            </div>

            <div className='flex justify-center items-center gap-4 flex-wrap'>

                {
                    (filterProduct.length === 0) ? (products).map((eachProduct)=>
                    <Card key={eachProduct.id} productDedails={eachProduct} />
                    ) : 
                    (filterProduct).map((eachProduct)=>
                    <Card key={eachProduct.id} productDedails={eachProduct} />
                    )
                }


            </div>

        </div>
    )
}

export default MainContainer
