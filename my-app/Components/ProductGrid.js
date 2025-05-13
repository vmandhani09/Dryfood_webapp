import React from 'react';
import ProductCard from '@/Components/ProductCard';

const products = [
  {
    name: "Ajneer (Figs)",
    price: 350,
    image: "/products/anj   eer.png",
    description: "Premium quality dried figs for daily health and energy."
  },
  {
    name: "Kaju (Cashew)",
    price: 450,
    image: "/products/kaju.png",
    description: "Whole cashews packed with taste and nutrition."
  },
  {
    name: "Badam (Almonds)",
    price: 400,
    image: "/products/badam.png",
    description: "Rich, crunchy almonds perfect for snacks or gifts."
  }
];

const ProductGrid = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
