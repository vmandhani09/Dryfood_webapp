import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-green-900 via-emerald-800 to-lime-700 text-white mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-extrabold mb-4">Krishna Naturals</h3>
          <p className="text-base leading-relaxed">
            Trusted supplier of premium dry fruits, nuts, and natural products. We ensure purity, quality, and freshness for your family.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-xl mb-4">Contact Us</h4>
          <p>Shop No. 9, Juna Mondha,</p>
          <p>Nanded, Maharashtra - 431601</p>
          <p className="mt-3">📞 +91 74836 00212</p>
          <p>✉️ info@dryfruithouse.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-4">Quick Links</h4>
          <ul className="space-y-3 text-base">
            {[
              { name: 'Home', href: '/' },
              { name: 'Shop', href: '/shop' },
              { name: 'Bulk Order', href: '/bulk-order' },
              { name: 'Contact', href: '/contact' },
              { name: 'About Us', href: '/about' },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline hover:text-yellow-300 transition duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Timing */}
        <div>
          <h4 className="font-bold text-xl mb-4">Connect & Visit</h4>
          <p>⏰ Open: Mon–Sat, 10am–7pm</p>
          <div className="flex space-x-6 mt-4 text-2xl">
            <a href="#" className="hover:text-yellow-300 transition duration-300">🌐</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">📸</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">🐦</a>
            <a href="#" className="hover:text-yellow-300 transition duration-300">💬</a>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400/40 text-center text-sm py-5 font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} Krishna Naturals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
