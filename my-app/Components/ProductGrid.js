"use client";
import React from 'react';
import ProductCard from '@/Components/ProductCard';

const products = [
  {
    name: "Ajneer (Figs)",
    image: "/products/anjeer.png",
    description: "Premium quality dried figs for daily health and energy.",
    prices: {
      "250g": 350,
      "500g": 650,
      "1kg": 1200
    }
  },
  {
    name: "Kaju (Cashew)",
    image: "/products/kaju.png",
    description: "Whole cashews packed with taste and nutrition.",
    prices: {
      "250g": 400,
      "500g": 780,
      "1kg": 1500
    }
  },
  {
    name: "Badam (Almonds)",
    image: "/products/badam.png",
    description: "Rich, crunchy almonds perfect for snacks or gifts.",
    prices: {
      "250g": 380,
      "500g": 740,
      "1kg": 1400
    }
  }
];

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
