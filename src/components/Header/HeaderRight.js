import React from "react";
import { useNavigate } from "react-router-dom"; 
import flag from "./../../assets/flag.png"; 

const HeaderRight = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCartClick = () => {
    navigate("/cart"); // Navigates to Cart page
  };

  return (
    <div className="flex flex-row items-center h-8 align-middle space-x-4">
      {/* Flag and Language Button */}
      <div className="flex flex-row items-center h-8">
        <img src={flag} alt="Flag" className="h-5 w-6" />
        <select
          className="h-5 bg-transparent text-white border-none focus:outline-none hover:text-gray-300 text-sm mb-1"
        >
          <option value="EN">EN</option>
        </select>
      </div>

      {/* Hello, Prakriti and Accounts Button */}
      <div className="flex flex-col items-center h-8 text-white text-xs">
        <p className="text-left">Hello, Prakriti</p>
        <select
          className=" bg-transparent text-white border-none focus:outline-none hover:text-gray-300 font-bold"
        >
          <option value=" Accounts & Lists"> Accounts & Lists</option>
         
        </select>
      </div>

      {/* Returns and Orders Buttons */}
      <div className="flex flex-col items-center h-8 text-white text-xs">
        <button
          className="bg-transparent text-white border-none focus:outline-none hover:text-gray-300"
        >
          Returns
        </button>
        <button
          className="bg-transparent text-white border-none focus:outline-none hover:text-gray-300"
        >
          & Orders
        </button>
      </div>

      {/* Cart Button */}
      <div className="flex flex-row items-center h-8 text-white text-xs space-x-1">
        <i className="fi fi-bs-shopping-cart text-xl"></i> {/* Cart Icon */}
        <button
          onClick={handleCartClick} 
          className="bg-transparent text-white border-none focus:outline-none hover:text-gray-300 hover:border-white"
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default HeaderRight;
