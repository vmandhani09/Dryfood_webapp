"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../../Components/ProductCard";
import React from "react";

type Product = {
  _id: string;
  name: string;
  brand?: string;
  category: string;
  price: number;
  image: string;
};

const categories = ["All", "Nuts", "Dryfruits", "Seeds", "Spices"];

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product?.brand?.toLowerCase()?.includes(searchQuery.toLowerCase());

    const inCategory =
      activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && inCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen">
      <h1 className="text-3xl font-extrabold text-emerald-700 mb-6">Shop</h1>

      <input
        type="text"
        placeholder="Search for products..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-lime-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              activeCategory === cat
                ? "bg-emerald-700 text-white shadow-lg"
                : "bg-white text-emerald-700 border border-emerald-700 hover:bg-emerald-100"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center mt-20">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
