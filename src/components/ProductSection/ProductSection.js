import React from 'react'
import allProducts from './../../assets/allProducts'
import Card from '../Card/Card';

const ProductSection = () => {
    return (
      <div className="relative top-[-250px] p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <Card
              key={product.id}
              name={product.name}
              description={product.description}
              category={product.category}
              image={product.image}
              newCost={product.new_cost}
              oldCost={product.old_cost}
            />
          ))}
        </div>
      </div>
    );
  };

export default ProductSection
