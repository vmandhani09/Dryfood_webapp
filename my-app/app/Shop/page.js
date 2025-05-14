'use client';
import React, { useState } from 'react';
import ProductCard from '@/Components/ProductCard';
import products from '@/data/products';

const ShopPage = () => {
  const [search, setSearch] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]); // min-max in ₹

  const allPrices = products.flatMap(p => Object.values(p.weights).map(parseFloat));
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const handleSearch = (product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase());

  const handleWeightFilter = (product) =>
    selectedWeight ? Object.keys(product.weights).includes(selectedWeight) : true;

  const handleCategoryFilter = (product) =>
    selectedCategory ? product.category === selectedCategory : true;

  const handlePriceFilter = (product) =>
    Object.values(product.weights).some(
      (price) => parseFloat(price) >= priceRange[0] && parseFloat(price) <= priceRange[1]
    );

  const handleSort = (a, b) => {
    const aPrice = parseFloat(Object.values(a.weights)[0]);
    const bPrice = parseFloat(Object.values(b.weights)[0]);
    if (sortOrder === 'lowToHigh') return aPrice - bPrice;
    if (sortOrder === 'highToLow') return bPrice - aPrice;
    if (sortOrder === 'aToZ') return a.name.localeCompare(b.name);
    if (sortOrder === 'zToA') return b.name.localeCompare(a.name);
    return 0;
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedWeight('');
    setSortOrder('');
    setSearch('');
    setPriceRange([minPrice, maxPrice]);
  };

  const weightOptions = [...new Set(products.flatMap(p => Object.keys(p.weights)))];
  const categoryOptions = [...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(handleSearch)
    .filter(handleWeightFilter)
    .filter(handleCategoryFilter)
    .filter(handlePriceFilter)
    .sort(handleSort);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Shop Products</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-1/2 mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <select
          value={selectedWeight}
          onChange={(e) => setSelectedWeight(e.target.value)}
          className="px-4 py-2 border rounded-md text-sm"
        >
          <option value="">All Weights</option>
          {weightOptions.map(w => <option key={w}>{w}</option>)}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md text-sm"
        >
          <option value="">All Categories</option>
          {categoryOptions.map(c => <option key={c}>{c}</option>)}
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded-md text-sm"
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="aToZ">Name: A to Z</option>
          <option value="zToA">Name: Z to A</option>
        </select>

        {/* Range Slider UI */}
        <div className="flex items-center gap-2">
          <label className="text-sm">₹{priceRange[0]}</label>
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseFloat(e.target.value), priceRange[1]])}
            className="w-24"
          />
          <input
            type="range"
            min={minPrice}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseFloat(e.target.value)])}
            className="w-24"
          />
          <label className="text-sm">₹{priceRange[1]}</label>
        </div>

        {(selectedCategory || selectedWeight || sortOrder || search) && (
          <button
            onClick={clearFilters}
            className="ml-auto bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Selected Filter Display */}
      <div className="mb-4 text-sm text-gray-700 space-x-4">
        {selectedWeight && <span>Weight: <strong>{selectedWeight}</strong></span>}
        {selectedCategory && <span>Category: <strong>{selectedCategory}</strong></span>}
        {search && <span>Search: <strong>{search}</strong></span>}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, idx) => (
          <ProductCard
            key={idx}
            name={product.name}
            image={product.image}
            description={product.description}
            weights={product.weights}
            category={product.category}
            selectedWeightFromPage={selectedWeight}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
