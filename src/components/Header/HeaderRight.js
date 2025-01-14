import React from "react";
import flag from "./../../assets/flag.png"; // Adjust the import path

const HeaderRight = () => {
  return (
    <div className="flex flex-row items-center h-8 align-middle space-x-4">
      {/* Flag and Language Dropdown */}
      <div className="flex flex-row items-center h-8">
        <img src={flag} alt="Flag" className="h-5 w-6" />
        <div className="dropdown">
          <select className="h-5 bg-transparent border-none focus:outline-none text-white">
            <option value="all">EN</option>
          </select>
        </div>
      </div>

      {/* Hello, Prakriti and Accounts Dropdown */}
      <div className="flex flex-col items-center h-8 text-white text-xs">
        <p>Hello, Prakriti</p>
        <div className="dropdown">
          <select className="h-5 bg-transparent border-none focus:outline-none text-white">
            <option value="all">Accounts & Lists</option>
          </select>
        </div>
      </div>

      {/* Returns and Orders */}
      <div className="flex flex-col items-center h-8 text-white text-xs">
        <p>Returns</p>
        <p>& Orders</p>
      </div>

      {/* Cart */}
      <div className="flex flex-row items-center h-8 text-white text-xs space-x-1">
        <i className="fi fi-bs-shopping-cart text-xl"></i> {/* Cart Icon */}
        <p>Cart</p> {/* Cart text */}
      </div>
    </div>
  );
};

export default HeaderRight;
