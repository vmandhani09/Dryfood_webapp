'use client';
import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ProductGrid from '@/Components/ProductGrid';
const page = () => {
  return (
    <div className="flex flex-col min-h-screen">      
      <main className="flex-grow p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-center mb-6 text-emerald-700">Shop Our Dry Fruits</h1>
        <ProductGrid />
      </main>
    </div>
  );
};

export default page