import React from 'react'
import CartItems from '../components/CartItems/CartItems'
import SubTotal from '../components/Subtotal/SubTotal';
import NavLayout from '../components/NavLayout/NavLayout';


const CartPage = () => {
    
  return (
    <div className='cart-page bg-gray-200 max-w-full flex flex-row gap-[3%] p-[2%] justify-center'>
      <CartItems/>
      <SubTotal/>
    </div>
  )
}

export default function (){
  return <>
  <NavLayout>
    <CartPage/>
  </NavLayout>
  </>
}

// export default CartPage
