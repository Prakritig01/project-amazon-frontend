import React from 'react'
import allProducts from './../../assets/allProducts'
import Card from '../Card/Card';

const ProductSection = () => {
    return (
      <div className="relative top-[-250px] ">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {allProducts.map((product) => (
            <Card product = {product} key={product.id}/>
          ))}
        </div>
      </div>
    );
  };

export default ProductSection
