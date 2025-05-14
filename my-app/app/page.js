'use client';
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/Components/ProductCard';
import products from '@/data/products';

const featuredProducts = products.filter(p => p.isFeatured);

const page = () => {
  return (
    <div className="space-y-16">

      {/* Hero Section */}
      <section className="relative bg-emerald-100 p-10 text-center">
        <h1 className="text-4xl font-bold text-emerald-900">Pure. Natural. Premium Quality Dry Fruits</h1>
        <p className="text-lg text-emerald-700 mt-2">From Krishna Naturals</p>
        <Link href="/Shop">
          <button className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Explore Our Dry Fruits</button>
        </Link>
        <img src="/banner.jpg" alt="Dry Fruits Banner" className="mt-8 mx-auto rounded-lg max-w-4xl shadow-lg" />
      </section>

      {/* Featured Products */}
      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="px-6">
        <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Almonds', 'Cashews', 'Figs', 'Raisins'].map((category, index) => (
            <Link href={`/shop?category=${category.toLowerCase()}`} key={index}>
              <div className="bg-white p-4 border rounded shadow hover:shadow-md cursor-pointer">
                <img src={`/categories/${category.toLowerCase()}.jpg`} alt={category} className="h-32 mx-auto object-cover rounded" />
                <p className="mt-2 font-medium text-gray-700">{category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-emerald-50 px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-2">About Krishna Naturals</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          At Krishna Naturals, we believe in purity and quality. Our dry fruits are handpicked, sun-dried, and packed with care to bring nature’s best directly to you. Perfect for daily health, gifting, or festivals.
        </p>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-600 italic">“Absolutely love the quality! Figs are juicy and cashews are super fresh.”</p>
            <p className="mt-2 font-semibold text-emerald-700">— Priya M.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-600 italic">“Best dry fruits I’ve tasted in a while. Perfect for gifting too.”</p>
            <p className="mt-2 font-semibold text-emerald-700">— Rajesh K.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <p className="text-gray-600 italic">“Repeat customer for 6 months. Excellent service and quality.”</p>
            <p className="mt-2 font-semibold text-emerald-700">— Sneha P.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-emerald-100 px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-4">Get updates on new arrivals and exclusive offers.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600">Subscribe</button>
        </div>
      </section>

      {/* CTA to Shop Page */}
      <section className="text-center py-10">
        <Link href="/Shop">
          <button className="px-6 py-3 bg-emerald-600 text-white text-lg rounded hover:bg-emerald-700">
            Browse All Products
          </button>
        </Link>
      </section>
    </div>
  );
};

export default page;
