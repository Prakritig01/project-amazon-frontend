import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import SubTotal from '../components/Subtotal/SubTotal';


const CartPage = () => {
    
  return (
    <div className='cart-page bg-gray-200 max-w-full flex flex-row'>
      <CartItems/>
      <SubTotal/>
    </div>
  )
}

export default CartPage
