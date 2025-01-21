import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItemFromCart,
  updateQuantity,
  toggleSelect,
  selectTotalForCart,
} from "../../slices/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectItemFromCart);
  const total = useSelector(selectTotalForCart);

  const handleUpdateQuantity = (id, increment) => {
    dispatch(updateQuantity({ id, increment }));
  };

  const handleToggleSelect = (id) => {
    dispatch(toggleSelect({ id }));
  };

  return (
    <div className="shopping-cart bg-white w-[60%] p-4 flex flex-col shadow-lg">
      <div className="top flex flex-row  justify-between border-b border-gray-500 ">
        <div className="heading flex flex-col ">
          <h1 className="font-roboto text-4xl">Shopping Cart</h1>
          <button
            className="text-start text-blue-700"
            onClick={() => {
              /* Handle deselecting all items */
            }}
          >
            Deselect all items
          </button>
        </div>

        <div className="price  font-roboto   align-bottom ">
          <p className="text-right mr-6  text-gray-500">Price</p>
        </div>
      </div>

      <div className="products flex flex-col ">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-row min-h-fit object-contain p-3 gap-4 border-b border-gray-300"
          >
            {/* Checkbox */}
            <div className="product-check-box">
              <input
                type="checkbox"
                checked={product.selected}
                onChange={() => handleToggleSelect(product.id)}
              />
            </div>

            {/* Product Image */}
            <div className="product-image ">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-36 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="mid flex flex-col gap-2">
              <div className="product-info  w-[60%] flex flex-col gap-1 ">
                <h3 className="font-roboto text-xl break-words">
                  {product.name}
                </h3>
                <p>Category: {product.category}</p>
                <img
                  src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
                  alt=""
                  className="w-14 h-auto bject-contain"
                />
              </div>

              {/* Quantity */}
              <div className="product-quantity flex flex-row gap-4 border-2 border-yellow-300  h-[18%] w-[20%] rounded-l-full rounded-r-full items-center justify-between p-1">
                <button
                  onClick={() => handleUpdateQuantity(product.id, -1)}
                  className="w-8 h-8 font-bold"
                >
                  {product.quantity > 1 ? (
                    <i className="fi fi-br-minus"></i>
                  ) : (
                    <i className="fi fi-rs-trash"></i>
                  )}
                </button>
                <p className="font-roboto font-bold">{product.quantity}</p>
                <button
                  onClick={() => handleUpdateQuantity(product.id, 1)}
                  className="w-8 h-8 font-bold"
                >
                  <i className="fi fi-br-plus"></i>
                </button>
              </div>
            </div>

            {/* Product Price */}
            <div className="product-price ml-auto  flex flex-col gap-2">
              <p className="font-roboto font-bold text-xl">
                ₹{product.new_cost}
              </p>
              <p className="old-price line-through text-red-600">
                ₹{product.old_cost}
              </p>
            </div>
          </div>
        ))}
        <div className="subtotal flex  justify-end p-2">
          <h2 className="font-roboto text-2xl ">Cart Total: ₹{total}</h2>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
