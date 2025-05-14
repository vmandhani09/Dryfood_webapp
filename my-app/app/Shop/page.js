'use client';

import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import products from '@/data/products';

const ShopPage = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            weights={product.weights}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
