'use client';
import { useState } from 'react';
import productsData from '@/data/products'; // Adjust the path
import ProductCard from '@/Components/ProductCard'; // Your card component
import slugify from 'slugify';

const categories = ['All', 'Nuts', 'Dryfruits', 'Seeds', 'Spices'];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Category mapping logic
  const categoryMap = {
    Nuts: ['Cashew', 'Almond', 'Pistachio'],
    Dryfruits: ['Figs'],
    Seeds: [],
    Spices: [],
  };

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const inCategory =
      activeCategory === 'All' ||
      categoryMap[activeCategory]?.includes(product.category);

    return matchesSearch && inCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-3xl font-extrabold text-emerald-700 mb-6">Shop</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-lime-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              activeCategory === cat
                ? 'bg-emerald-700 text-white shadow-lg'
                : 'bg-white text-emerald-700 border border-emerald-700 hover:bg-emerald-100'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center mt-20">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
