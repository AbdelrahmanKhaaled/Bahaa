import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/baha-removebg-preview.png';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="absolute top-[32px] left-1/2 -translate-x-1/2 backdrop-blur-[17px] backdrop-filter bg-[rgba(255,255,255,0.5)] rounded-[100px] px-[60px] py-0 h-[80px] flex items-center justify-between w-[1240px] z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Bahaa Project Logo" className="h-[78.761px] w-[86px]" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center justify-between w-[652px]">
        <Link 
          to="/" 
          className={`text-[20px] font-salsa capitalize transition-colors ${
            location.pathname === '/' ? 'text-cyan' : 'text-gray-text'
          }`}
        >
          Home
        </Link>
        <Link 
          to="/topics" 
          className={`text-[20px] font-salsa capitalize transition-colors ${
            location.pathname === '/topics' ? 'text-cyan' : 'text-gray-text'
          }`}
        >
          Topics
        </Link>
        <Link 
          to="/why-choose-us" 
          className={`text-[20px] font-salsa capitalize transition-colors ${
            location.pathname === '/why-choose-us' ? 'text-cyan' : 'text-gray-text'
          }`}
        >
          why choose us
        </Link>
        <Link 
          to="/ai-supporter" 
          className={`text-[20px] font-salsa capitalize transition-colors ${
            location.pathname === '/ai-supporter' ? 'text-cyan' : 'text-gray-text'
          }`}
        >
          AI supporter
        </Link>
      </div>

      {/* Sign In Button */}
      <Link 
        to="/signin" 
        className="bg-dark-blue text-white rounded-[28px] px-4 py-2 h-12 flex items-center justify-center capitalize text-[16px] font-salsa hover:opacity-90 transition-opacity"
      >
        sign in
      </Link>
    </nav>
  );
};

export default Navbar;

