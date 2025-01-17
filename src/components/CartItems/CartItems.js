import React from "react";
import p1_img from "./../../assets/productPictures/product_1.png";
import p2_img from "./../../assets/productPictures/product_2.png";
import p3_img from "./../../assets/productPictures/product_3.png";
import { useDispatch, useSelector } from "react-redux";
import { selectItemFromCart, updateQuantity,toggleSelect } from "../../slices/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  // const products = [
  //   {
  //     id: 1,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     description: "This is the description of the product",
  //     category: "Women",
  //     image: p1_img,
  //     new_cost: 550.0,
  //     old_cost: 480.5,
  //   },
  //   {
  //     id: 2,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     description: "This is the description of the product",
  //     category: "Women",
  //     image: p2_img,
  //     new_cost: 485.0,
  //     old_cost: 420.5,
  //   },
  //   {
  //     id: 3,
  //     name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
  //     description: "This is the description of the product",
  //     category: "Women",
  //     image: p3_img,
  //     new_cost: 660.0,
  //     old_cost: 500.5,
  //   },
  // ];
  const products = useSelector(selectItemFromCart);

  const handleUpdateQuantity = (id, increment) => {
    console.log(id, increment);
    dispatch(updateQuantity({ id, increment }));
  }

  const handleToggleSelect = (id) => {
    dispatch(toggleSelect({id}));
  }

  return (
    <div className="cart-items bg-white w-[80%] mx-auto p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold ">Shopping Cart</h1>
      <button className="focus:outline-none " style={{ color: "#538bbd" }}>
        Deselect all items
      </button>

      {/* Gray line below the button */}
      <div className="line-div flex flex-col mb-2">
        <p className="text-right font-semibold">Price</p>
        <div className="border-b border-gray-300 w-full mt-2"></div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row items-center justify-between  p-4 border-b border-gray-200"
          >
           { console.log(product)}
            {/* Checkbox */}
            <div className="checkbox w-8 h-8 flex items-center justify-center">
              <input type="checkbox" checked = {product.selected} onChange={()=>handleToggleSelect(product.id)} />
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

              <p className="text-sm text-gray-600 mt-1">
                {product.description}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Category: {product.category}
                <div className="amazon-logo flex ">
                  <img
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                    alt=""
                  />
                </div>
                <div className="quantity-btn ">
                  <div className="flex items-center justify-between border-2 border-yellow-300 bg-white text-gray-900 w-[14%] h-8 px-2 rounded-full mt-2">
                    <button onClick={() =>handleUpdateQuantity(product.id, -1)}>
                      <i className="fi fi-rs-trash"></i>
                    </button>
                    <p>{product.quantity}</p>
                    <button onClick={() => handleUpdateQuantity(product.id, 1)}>
                      <i className="fi fi-br-plus"></i>
                    </button>
                  </div>
                </div>
              </p>
            </div>

            {/* Product Price */}
            <div className="product-price text-right">
              <p className="text-xl font-bold text-black">
                ₹{product.new_cost}
              </p>
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
