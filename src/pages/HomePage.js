import React from 'react'
import Carousel from '../components/Carousel/carousel'
import ProductSection from '../components/ProductSection/ProductSection'

const HomePage = () => {
  return (
    <div className='home-page '>
      <Carousel/>
      <ProductSection/>
    </div>
  )
}

export default HomePage
