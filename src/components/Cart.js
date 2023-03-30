
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import { clearCart } from '../utils/cartSlice'
import { Link } from 'react-router-dom'


const Cart = () => {

  const dispatch = useDispatch()

  const cartProduct = useSelector(store => store.cart.items)

  const clearCartfunc = () => {
    dispatch(clearCart())
  }

  return (
    <div className='flex flex-col item-center'>
      <div className='flex justify-around items-center w-[100%] p-4'>
        <h1 className='font-bold text-4xl'>Your Cart</h1>
        <button onClick={()=>clearCartfunc()} className='bg-yellow-400 px-4 py-1'>clear cart</button>

        <Link to={'/checkout'}>

        <button  className='bg-yellow-400 px-4 py-1'>checkout</button>
        </Link>
      </div>

      <div className='flex justify-center items-center gap-4 flex-wrap p-4'>

        {
          cartProduct.map((eachProduct,index)=> 
          <Card key={index} productDedails={eachProduct} cartCard={true} index={index}/>
          )
        }

      </div>

    </div>
  )
}

export default Cart
