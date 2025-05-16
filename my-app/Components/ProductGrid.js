"use client";
import React from 'react';
import ProductCard from '@/Components/ProductCard';
import products from '@/data/products';




const ProductGrid = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          description={product.description}
          prices={product.prices}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
