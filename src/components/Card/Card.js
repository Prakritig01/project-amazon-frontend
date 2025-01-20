import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const isProductInCart = useSelector(state => state.cart.items.find(item => item.id === product.id));

  const handleAddToCart = (product) => {
    dispatch(addToCart({product}));
  };
  return (
    <div className="card bg-white border border-gray-200 rounded-lg overflow-hidden w-64">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="image w-full  object-contain"
      />

      {/* Product Details */}
      <div className="flex flex-col px-4 py-2">
        <h3 className="text-sm font-roboto break-words">{product.name}</h3>

        {/* Category */}
        <p className="text-xs text-gray-500 mt-2">
          Category: {product.category}
        </p>

        {/* Price Section */}
        <div className="flex flex-wrap items-center mt-2 gap-x-4">
          <div className="text-xl font-medium text-black">
            ₹{product.new_cost}
          </div>
          <div className="text-sm text-red-500 line-through">
            ₹{product.old_cost}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
  className="bg-yellow-300 text-black text-sm  px-4 py-2 rounded-lg hover:bg-yellow-600 mt-4 w-full"
  onClick={() => handleAddToCart()} // Add parentheses to invoke the function
>
  Add to Cart
</button>

      </div>
    </div>
  );
};

export default Card;
