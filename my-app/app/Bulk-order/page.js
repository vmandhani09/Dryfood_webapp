import React from 'react';
import Head from 'next/head';
import FAQSection from '@/Components/FAQSection';

const BulkOrderPage = () => {
  return (
    <>
      <Head>
        <title>Bulk Ordering | Krishna Naturals</title>
        <meta
          name="description"
          content="Order premium quality dry fruits in bulk at wholesale rates. Get a free quote now!"
        />
      </Head>

    <div className="bg-gradient-to-r from-emerald-700 via-green-600 to-lime-500 text-white py-20 px-6 text-center shadow-md">
        <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg">Bulk Ordering</h1>
        <p className="text-lg opacity-90 tracking-wide">
          <span className="opacity-60 hover:opacity-100 transition-opacity cursor-default">Home</span> / Order
        </p>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Wholesale Dry Fruits</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Krishna Naturals offers premium quality dry fruits in bulk at the best wholesale prices.
            Perfect for resellers, corporate gifting, and institutions. Hassle-free delivery across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pitch Box */}
          <div className="bg-gradient-to-tr from-green-900 via-emerald-800 to-lime-700 text-white rounded-xl p-10 shadow-lg flex flex-col justify-between">
            <h3 className="text-3xl font-extrabold mb-6">Let us get the business started!</h3>
            <p className="mb-8 text-lg leading-relaxed">
              Reach out to us for the best bulk deals in the market. We ensure quality and timely delivery.
            </p>
            <div className="flex space-x-6 text-3xl">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition duration-300">📘</a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition duration-300">📸</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition duration-300">💼</a>
              <a href="#" aria-label="WhatsApp" className="hover:text-yellow-400 transition duration-300">💬</a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-xl rounded-xl p-10">
            <h4 className="text-2xl font-bold mb-6 text-gray-900">Bulk Order Enquiry Form</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Id"
                  className="border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  required
/>
          </div>

          <textarea
            rows={5}
            placeholder="Your Message"
            className="border border-gray-300 px-5 py-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-700 via-green-600 to-lime-600 text-white font-extrabold py-4 rounded-xl hover:brightness-110 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 mb-20">
    <FAQSection />
  </section>
</>
);
};

export default BulkOrderPage;