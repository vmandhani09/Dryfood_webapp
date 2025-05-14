'use client';
import React, { useState, useEffect } from 'react';

const ProductCard = ({ name, image, description, weights = {}, category, selectedWeightFromPage }) => {
  const weightKeys = Object.keys(weights);
  const defaultWeight = selectedWeightFromPage && weightKeys.includes(selectedWeightFromPage)
    ? selectedWeightFromPage
    : weightKeys[0];

  const [selectedWeight, setSelectedWeight] = useState(defaultWeight);

  // Update local state if parent-selected weight changes
  useEffect(() => {
    if (selectedWeightFromPage && weightKeys.includes(selectedWeightFromPage)) {
      setSelectedWeight(selectedWeightFromPage);
    }
  }, [selectedWeightFromPage, weightKeys]);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden max-w-sm w-full">
      <img src={image} alt={name} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {weightKeys.length > 0 && (
          <div className="mt-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Weight:
            </label>
            <select
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(e.target.value)}
              className="w-full border-gray-300 rounded-md text-sm py-1 px-2"
            >
              {weightKeys.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
          </div>
        )}

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
