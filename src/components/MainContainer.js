
import React, { useEffect, useState } from 'react'
import { FAKE_STORE_URL , productCategories } from '../helper'
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

    console.log(products)


    return (
        <div>

            <div className='flex justify-center items center gap-6 flex-wrap'>
                {
                    productCategories.map((eachProduct , index) =>
                        <ButtonCategory key={index} categoryName={eachProduct} />
                    )
                }
            </div>
            <div className='flex justify-center items-center gap-4 flex-wrap'>

                {
                    products.map((eachProduct)=>
                    <Card key={eachProduct.id} productDedails={eachProduct} />
                    )
                }

            </div>

        </div>
    )
}

export default MainContainer
