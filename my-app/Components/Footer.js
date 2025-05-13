import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Krishna Naturals</h3>
          <p className="text-sm">
            Krishna Naturals – Trusted supplier of quality dry fruits, nuts, and natural products, carefully sourced to ensure purity and health for your family.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact Us</h4>
          <p>Shop No. 9, Juna Mondha,</p>
          <p>Nanded, Maharashtra - 431601</p>
          <p className="mt-2">📞 +91 74836 00212</p>
          <p>✉️ info@dryfruithouse.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/bulk-order" className="hover:underline">Bulk Order</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>

        {/* Social & Timing */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Connect & Visit</h4>
          <p>⏰ Open: Mon–Sat, 10am–7pm</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-emerald-400">🌐</a>
            <a href="#" className="hover:text-emerald-400">📸</a>
            <a href="#" className="hover:text-emerald-400">🐦</a>
            <a href="#" className="hover:text-emerald-400">💬</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Krishna Naturals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
