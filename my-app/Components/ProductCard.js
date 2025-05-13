import React from 'react';

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={name} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-emerald-600 font-bold text-lg">₹{price}</span>
          <button className="bg-emerald-500 text-white text-sm px-4 py-2 rounded hover:bg-emerald-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
