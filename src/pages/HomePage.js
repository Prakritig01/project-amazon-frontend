import React from 'react'
import Carousel from '../components/Carousel/carousel'
import ProductSection from '../components/ProductSection/ProductSection'
import NavLayout from '../components/NavLayout/NavLayout'

const HomePage = () => {
  return (
    <div className='home-page '>
      <Carousel/>
      <ProductSection/>
    </div>
  )
}

export default function(){
  return <>
  <NavLayout>
    <HomePage/>
  </NavLayout>
  </>
}

// export default HomePage
