import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../slices/authSlice";

const Card = ({ product }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve user authentication state and cart state
  const isUserLoggedIn = useSelector(selectCurrentUser); // Replace `currentUser` with your authSlice property
  const isProductInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleAddToCart = (product) => {
    if (!isUserLoggedIn) {
      // If user is not logged in, navigate to the login page
      navigate("/login");
      return;
    }

    // Add product to cart
    dispatch(addToCart({ product }));
    navigate("/cart");
  };

  return (
    <div className="card bg-white border border-gray-200 rounded-lg overflow-hidden w-48">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="image w-full h-64 object-cover"
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
        {isProductInCart ? (
          <Link to="/cart" className="block w-full mt-4">
            <button className="bg-gray-300 text-black text-sm px-4 py-2 rounded-lg hover:bg-gray-500 w-full">
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            className={`${
              isUserLoggedIn
                ? "bg-yellow-300 hover:bg-yellow-600"
                : "bg-yellow-300 cursor-not-allowed text-nowrap"
            } text-black text-sm px-4 py-2 rounded-lg mt-4 w-full`}
            onClick={() => handleAddToCart(product)}
            disabled={!isUserLoggedIn} // Disable button if user is not logged in
          >
            {isUserLoggedIn ? "Add to Cart" : "Login to Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
