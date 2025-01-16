import React from "react";

const HeaderMid = () => {
  return (
    <div className="w-[55%] flex items-center justify-between font-roboto">
      {/* Dropdown Menu */}
      <div className="dropdown">
        <select className="rounded-l-md bg-gray-200 h-8 px-3 focus:outline-none">
          <option value="all">All</option>
        </select>
      </div>

      {/* Search Box */}
      <div className="flex items-center flex-grow">
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="bg-white text-black w-full h-8 px-3 focus:outline-none "
        />
      </div>

      {/* Search Icon */}
      <div
        className="flex items-center justify-center rounded-r-md h-8 px-3"
        style={{ backgroundColor: '#febd69' }}
      >
        <i className="fi fi-rr-search"></i>
      </div>
    </div>
  );
};

export default HeaderMid;
