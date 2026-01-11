import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/baha-removebg-preview.png';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4 md:top-6 lg:top-[32px] left-1/2 -translate-x-1/2 backdrop-blur-[17px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[50px] lg:rounded-[100px] px-4 md:px-8 lg:px-[60px] py-0 h-16 md:h-[70px] lg:h-[80px] flex items-center justify-between w-[95%] max-w-[1240px] z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center flex-shrink-0">
        <img src={logo} alt="Bahaa Project Logo" className="h-12 w-auto md:h-16 lg:h-[78.761px] lg:w-[86px]" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden flex items-center justify-center w-10 h-10 text-dark-blue"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center justify-between w-[652px]">
        <Link
          to="/"
          className={`text-[20px] font-salsa capitalize transition-colors ${location.pathname === '/' ? 'text-cyan' : 'text-gray-text'
            }`}
        >
          Home
        </Link>
        <Link
          to="/topics"
          className={`text-[20px] font-salsa capitalize transition-colors ${location.pathname === '/topics' ? 'text-cyan' : 'text-gray-text'
            }`}
        >
          Topics
        </Link>
        <Link
          to="/why-choose-us"
          className={`text-[20px] font-salsa capitalize transition-colors ${location.pathname === '/why-choose-us' ? 'text-cyan' : 'text-gray-text'
            }`}
        >
          why choose us
        </Link>
        <Link
          to="/ai-supporter"
          className={`text-[20px] font-salsa capitalize transition-colors ${location.pathname === '/ai-supporter' ? 'text-cyan' : 'text-gray-text'
            }`}
        >
          AI supporter
        </Link>
      </div>

      {/* Desktop Sign In Button */}
      <Link
        to="/signin"
        className="hidden lg:flex bg-dark-blue text-white rounded-[28px] px-4 py-2 h-12 items-center justify-center capitalize text-[16px] font-salsa hover:opacity-90 transition-opacity"
      >
        sign in
      </Link>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-lg py-4 px-4 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-[18px] font-salsa capitalize transition-colors py-2 ${location.pathname === '/' ? 'text-cyan' : 'text-gray-text'
              }`}
          >
            Home
          </Link>
          <Link
            to="/topics"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-[18px] font-salsa capitalize transition-colors py-2 ${location.pathname === '/topics' ? 'text-cyan' : 'text-gray-text'
              }`}
          >
            Topics
          </Link>
          <Link
            to="/why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-[18px] font-salsa capitalize transition-colors py-2 ${location.pathname === '/why-choose-us' ? 'text-cyan' : 'text-gray-text'
              }`}
          >
            why choose us
          </Link>
          <Link
            to="/ai-supporter"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-[18px] font-salsa capitalize transition-colors py-2 ${location.pathname === '/ai-supporter' ? 'text-cyan' : 'text-gray-text'
              }`}
          >
            AI supporter
          </Link>
          <Link
            to="/signin"
            onClick={() => setMobileMenuOpen(false)}
            className="block bg-dark-blue text-white rounded-[28px] px-4 py-3 text-center capitalize text-[16px] font-salsa hover:opacity-90 transition-opacity"
          >
            sign in
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

