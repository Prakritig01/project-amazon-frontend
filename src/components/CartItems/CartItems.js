import React from "react";
import p1_img from "./../../assets/productPictures/product_1.png";
import p2_img from "./../../assets/productPictures/product_2.png";
import p3_img from "./../../assets/productPictures/product_3.png";

const CartItems = () => {
  const products = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      description: "This is the description of the product",
      category: "Women",
      image: p1_img,
      new_cost: 550.0,
      old_cost: 480.5,
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      description: "This is the description of the product",
      category: "Women",
      image: p2_img,
      new_cost: 485.0,
      old_cost: 420.5,
    },
    {
      id: 3,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      description: "This is the description of the product",
      category: "Women",
      image: p3_img,
      new_cost: 660.0,
      old_cost: 500.5,
    },
  ];

  return (
    <div className="cart-items bg-white w-[80%] mx-auto p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      <button className="text-blue-500 hover:text-blue-700 focus:outline-none mb-4">
        Deselect all items
      </button>

      {/* Gray line below the button */}
      <div className="line-div flex flex-col mb-6">
        <p className="text-right font-semibold">Price</p>
        <div className="border-b border-gray-300 w-full mt-2"></div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row items-center justify-between  p-4 border-b border-gray-200"
          >
            {/* Checkbox */}
            <div className="checkbox w-8 h-8 flex items-center justify-center">
              <input type="checkbox" id={`checkbox-${product.id}`} />
            </div>

            {/* Product Image */}
            <div className="image w-36 h-36 overflow-hidden ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="product-info flex-1 ml-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
            </div>

            {/* Product Price */}
            <div className="product-price text-right">
              <p className="text-xl font-bold text-black">₹{product.new_cost}</p>
              <p className="text-sm text-gray-500 line-through text-red-600">
                ₹{product.old_cost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
