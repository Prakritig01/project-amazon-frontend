import React from 'react';

const SubTotal = () => {
  return (
    <div
      className="subtotal-box bg-white border border-gray-300 shadow-lg rounded-lg p-4 h-[10%] w-[20%] mr-[2%]"
    >
      {/* Heading */}
      <h2 className="text-lg font-bold mb-2">Subtotal (3 items): ₹3,458.00</h2>
      
      {/* Checkbox */}
      <div className="gift-option flex items-center mb-4">
        <input type="checkbox" id="gift-checkbox" className="mr-2" />
        <label htmlFor="gift-checkbox" className="text-sm text-gray-600">
          This order contains a gift
        </label>
      </div>
      
      {/* Proceed to Buy Button */}
      <button className="proceed-btn w-full bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-300">
        Proceed to Buy
      </button>
      
      {/* EMI Dropdown */}
      <div className="emi-dropdown mt-4">
        <label htmlFor="emi-options" className="block text-sm text-gray-600 mb-1">
          EMI available
        </label>
        <select
          id="emi-options"
          className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm"
        >
          <option>Select EMI option</option>
          <option>3 months EMI</option>
          <option>6 months EMI</option>
          <option>12 months EMI</option>
        </select>
      </div>
    </div>
  );
};

export default SubTotal;
