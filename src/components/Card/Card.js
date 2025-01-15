import React from 'react';

const Card = ({ name, description, category, image, newCost, oldCost }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between max-w-xs font-roboto">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-contain rounded-md mb-4"
      />
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-sm text-black">{description}</p>
        <p className="text-sm text-gray-500 mt-2">Category: {category}</p>
      </div>
      <div className="flex flex-col justify-between items-start">
        <div>
          <p className="text-xl font-bold">₹{newCost}</p>
          <p className="text-sm text-gray-500 line-through">₹{oldCost}</p>
        </div>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 w-full h-8 mt-4 flex items-center justify-center">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
