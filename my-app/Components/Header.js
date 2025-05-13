import React from 'react';
import Link from 'next/link'; // ✅ Correct import for Next.js

const Header = () => {
  return (
    <>
      <div className="bg-[#4b0000] text-white text-sm flex justify-between items-center px-6 py-2">
        <div>
          <span className="mr-4">📞 +91-9359682328</span>
          <span>✉️ info@krishnanaturals.com</span>
        </div>
        <div className="flex gap-4">
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
          <span>💼</span>
        </div>
      </div>

      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/file.svg" alt="Dry Fruit House Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-emerald-700">Krishna Naturals</h1>
          </div>

          <nav className="hidden md:flex gap-6 font-semibold text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/Shop">Shop</Link>
            <Link href="/Bulk-order">Bulk Order</Link>
            <Link href="/Contact">Contact Us</Link>
            <Link href="/About">About Us</Link>
          </nav>

          <div className="flex gap-4 items-center">
            <span className="text-xl">👤</span>
            <span className="text-xl">🛒</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
