'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideHeader(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mounted]);

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-500 backdrop-blur-md bg-gradient-to-r from-green-800 via-emerald-700 to-lime-600 text-white shadow-lg
        ${hideHeader ? '-translate-y-full' : 'translate-y-0'}
        `}
      style={{ backgroundColor: 'rgba(22, 101, 52, 0.85)' }} // semi-transparent fallback
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/file.svg" alt="Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">Krishna Naturals</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 font-semibold text-lg lg:text-xl tracking-wide">
          {[
            { name: 'Home', href: '/' },
            { name: 'Shop', href: '/Shop' },
            { name: 'Bulk Order', href: '/Bulk-order' },
            { name: 'Contact Us', href: '/Contact' },
            { name: 'About Us', href: '/About' },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative after:absolute after:w-full after:h-[2px] after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 hover:text-yellow-300 transition-colors duration-300
                ${pathname === link.href ? 'text-yellow-400 font-bold' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex gap-8 items-center text-3xl">
  {/* Sign In / Account */}
  <Link href="/Signin" title="Sign In" className="hover:text-yellow-300 transition duration-300">
    <FaUserCircle />
  </Link>

  {/* Cart */}
  <Link
    href="/cart"
    title="Cart"
    className="hover:text-lime-300 transition duration-300 relative"
  >
    <FaShoppingCart />
    <span className="absolute -top-2 -right-3 bg-yellow-400 text-green-900 font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
      3
    </span>
  </Link>
</div>
      </div>
    </header>
  );
};

export default Header;
