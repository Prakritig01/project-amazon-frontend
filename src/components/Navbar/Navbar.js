import React from 'react';
import DrawerComponent from '../Drawer/Drawer';
import { useState } from 'react';

const Navbar = () => {
  // State to control the opening and closing of the Drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  // Function to toggle the Drawer
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    
      <div className="bg-[#232f3e] flex text-white text-s overflow-scroll scrollbar-x- scrollbar-none whitespace-nowrap ">
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  flex flex-row justify-center items-center" onClick={toggleDrawer}>All</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Fresh</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">MX Player</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Sell</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Amazon Pay</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Gift Cards</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Buy Again</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Amazon Basics</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Gift Ideas</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Customer Service</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Today's Deal</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Browsing History</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Subscribe & Save</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Home Improvement</button>
        <button className="bg-transparent px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none  ">Prakriti's Amazon.in</button>
        {/* Pass state and toggle function as props to DrawerComponent */}
      <DrawerComponent open={openDrawer} toggleDrawer={toggleDrawer} />
      </div>
   
  );
}

export default Navbar;
