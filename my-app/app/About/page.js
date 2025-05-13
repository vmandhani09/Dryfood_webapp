'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

const reviews = [
  {
    name: "Aarti P.",
    text: "Dryfroot has the freshest dry fruits I've ever had. Packaging is neat and delivery is quick!",
  },
  {
    name: "Rahul S.",
    text: "Love the quality and the shop's commitment to health. Highly recommended!",
  },
  {
    name: "Sneha T.",
    text: "Their figs and cashews are my go-to snacks. Clean, fresh, and great value!",
  },
];

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 bg-white text-gray-800">
        {/* Shop Image and Intro */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/shop.jpg" // Replace with your real image path in public/
              alt="Krishna Naturals Shop"
              width={600}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-emerald-600 mb-4">Welcome to Krishna Naturals</h2>
            <p className="mb-4">
              Located at <strong>Shop No. 9, Juna Mondha, Nanded, Maharashtra</strong>, Krishna Naturals is a family-owned dry fruit store dedicated to providing premium quality dry fruits and natural products. We believe in purity, sustainability, and delivering the best from nature to your home.
            </p>
            <p>
              Whether you’re buying for personal use, bulk orders, or gifting, we are your one-stop shop for quality and trust.
            </p>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-emerald-600 mb-4">Our Vision & Mission</h3>
          <p className="mb-2">
            <strong>Vision:</strong> To be India's most trusted dry fruit brand by promoting health and purity through natural products.
          </p>
          <p>
            <strong>Mission:</strong> Deliver top-quality dry fruits to every household while supporting local farmers and encouraging healthy living.
          </p>
        </section>

        {/* Reviews Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-emerald-600 mb-4">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-emerald-50 p-4 rounded-xl shadow-sm border border-emerald-100"
              >
                <p className="italic text-gray-700">"{review.text}"</p>
                <p className="mt-2 text-right font-semibold text-emerald-700">- {review.name}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Google Map */}
        <section className="mt-12">
        <h3 className="text-2xl font-bold text-emerald-600 mb-4">Find Us Here</h3>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-md border border-emerald-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471.1350634779443!2d77.31949187448626!3d19.1479529!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6383bb5a859%3A0x4566f2e227148be!2sShri%20Krishna%20Trading!5e0!3m2!1sen!2sin!4v1747156173083!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </section>

      </main>
    </div>
  );
};

export default page;
