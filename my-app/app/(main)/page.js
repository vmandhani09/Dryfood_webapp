'use client';
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/Components/ProductCard';
import products from '@/data/products';
import Head from 'next/head';
import Image from 'next/image';


<Head>
  <title>Krishna Naturals - Premium Dry Fruits</title>
  <meta name="description" content="Pure, natural dry fruits from Krishna Naturals. Shop premium quality almonds, cashews, figs, and more!" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>


const featuredProducts = products.filter((p) => p.isFeatured);

const page = () => {
  return (
    <div className="space-y-20 max-w-7xl mx-auto p-6">

      {/* Hero Section */}
      <section className="relative bg-emerald-100 p-12 rounded-lg text-center shadow-md">
        <h1 className="text-5xl font-extrabold text-emerald-900 leading-tight">
          Pure. Natural. Premium Quality Dry Fruits
        </h1>
        <p className="text-lg text-emerald-700 mt-3">From Krishna Naturals</p>
        <Link href="/Shop">
          <button className="mt-8 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
            Explore Our Dry Fruits
          </button>
        </Link>
        <img
          src="/banner.jpg"
          alt="Dry Fruits Banner"
          className="mt-10 mx-auto rounded-lg max-w-5xl shadow-lg"
        />
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-extrabold mb-6 text-emerald-700">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section>
        <h2 className="text-3xl font-extrabold mb-6 text-emerald-700">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {['Almonds', 'Cashews', 'Figs', 'Raisins'].map((category, index) => (
            <Link href={`/shop?category=${category.toLowerCase()}`} key={index}>
              <div className="bg-white p-5 border rounded-lg shadow hover:shadow-lg cursor-pointer transition">
                <img
                  src={`/categories/${category.toLowerCase()}.jpg`}
                  alt={category}
                  className="h-32 mx-auto object-cover rounded-md"
                />
                <p className="mt-3 font-semibold text-emerald-700">{category}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-emerald-50 p-10 rounded-lg text-center shadow-md">
        <h2 className="text-3xl font-extrabold mb-4 text-emerald-600">
          About Krishna Naturals
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg">
          At Krishna Naturals, we believe in purity and quality. Our dry fruits
          are handpicked, sun-dried, and packed with care to bring nature’s best
          directly to you. Perfect for daily health, gifting, or festivals.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-emerald-700">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow border border-emerald-100">
            <p className="text-gray-600 italic">
              “Absolutely love the quality! Figs are juicy and cashews are super
              fresh.”
            </p>
            <p className="mt-4 font-semibold text-emerald-700">— Priya M.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border border-emerald-100">
            <p className="text-gray-600 italic">
              “Best dry fruits I’ve tasted in a while. Perfect for gifting too.”
            </p>
            <p className="mt-4 font-semibold text-emerald-700">— Rajesh K.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border border-emerald-100">
            <p className="text-gray-600 italic">
              “Repeat customer for 6 months. Excellent service and quality.”
            </p>
            <p className="mt-4 font-semibold text-emerald-700">— Sneha P.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-emerald-100 p-10 rounded-lg text-center shadow-md max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-emerald-700">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Get updates on new arrivals and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* CTA to Shop Page */}
      <section className="text-center py-10">
        <Link href="/Shop">
          <button className="px-8 py-3 bg-emerald-700 text-white text-xl rounded-lg hover:bg-emerald-800 transition">
            Browse All Products
          </button>
        </Link>
      </section>
    </div>
  );
};

export default page;
