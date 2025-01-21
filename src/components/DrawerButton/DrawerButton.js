// DrawerButton Component
import React from 'react';

const DrawerButton = ({ label, showArrow }) => {
  return (
    <button className="w-full text-left p-2 bg-transparent hover:bg-gray-200 rounded-md flex items-center justify-between">
      <span>{label}</span>
      {showArrow && <span> &gt; </span>}  {/* Show arrow symbol only if showArrow is true */}
    </button>
  );
};

export default DrawerButton;
