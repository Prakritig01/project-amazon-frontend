import React from 'react';
import DrawerButton from './../DrawerButton/DrawerButton';  // Importing the DrawerButton component
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../slices/authSlice';

const DrawerComponent = ({ open, toggleDrawer }) => {
  const user =  useSelector(selectCurrentUser);
  const userName = user?.name || "Guest";
  const sections = [
    {
      title: 'Trending',
      buttons: [
        { label: 'Best Seller', showArrow: false },
        { label: 'New Releases', showArrow: false },
        { label: 'Movers and Shakers', showArrow: false }
      ]
    },
    {
      title: 'Digital Content and Devices',
      buttons: [
        { label: 'Echo and Alexa', showArrow: true },
        { label: 'Fire TV', showArrow: true },
        { label: 'Kindle E-Reader & eBooks', showArrow: true },
        { label: 'Audible Audiobooks', showArrow: true },
        { label: 'Amazon Prime Video', showArrow: true },
        { label: 'Amazon Prime Music', showArrow: true }
      ]
    },
    {
      title: 'Shop By Category',
      buttons: [
        { label: 'Mobile and Computers', showArrow: true },
        { label: 'TV, Appliances, Electronics', showArrow: true },
        { label: 'Men\'s Fashion', showArrow: true },
        { label: 'Women\'s Fashion', showArrow: true }
      ]
    },
    {
      title: 'Programs and Features',
      buttons: [
        { label: 'Amazon Pay', showArrow: true },
        { label: 'Gift Cards', showArrow: true },
        { label: 'Amazon LaunchPad', showArrow: true },
        { label: 'Amazon Business', showArrow: true }
      ]
    },
    {
      title: 'Help and Settings',
      buttons: [
        { label: 'Your Account', showArrow: true },
        { label: 'Customer Service', showArrow: true },
        { label: 'Sign Out', showArrow: true }
      ]
    }
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleDrawer}  // Close drawer when clicking outside or pressing escape
    >
        <div className="greeting border border-black bg-[#131921] p-3 text-white font-roboto flex justify-center items-center gap-2">
        <i class="fi fi-br-circle-user"></i>
            Hello ,{userName}</div>
      <div className="w-64 p-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
        
        

        {/* Render Sections Dynamically */}
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-bold mb-2">{section.title}</h4>
            {section.buttons.map((button, i) => (
              <DrawerButton key={i} label={button.label} showArrow={button.showArrow} />
            ))}
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
