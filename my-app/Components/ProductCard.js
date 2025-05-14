import React, { useState } from 'react';

const ProductCard = ({ name, image, description, weights = {} }) => {
  const weightKeys = Object.keys(weights);
  const [selectedWeight, setSelectedWeight] = useState(weightKeys[0]);

  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        <div className="mt-2">
          <label className="block text-sm font-medium text-gray-700">Weight:</label>
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm"
          >
            {weightKeys.map((weight) => (
              <option key={weight} value={weight}>
                {weight}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-emerald-600 font-bold text-lg">
            ₹{weights[selectedWeight]}
          </span>
          <button className="bg-emerald-500 text-white text-sm px-4 py-2 rounded hover:bg-emerald-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;