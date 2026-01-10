import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/baha-logo-new.png';
import howBg from '../assets/how_bg.png';

const Footer = () => {
  return (
    <footer 
      className="relative w-full pt-[80px] pb-8 mt-10 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${howBg})` }}
    >
      <div className="max-w-[1440px] mx-auto px-[100px] relative z-10">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 mb-16">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link to="/">
              <img src={logo} alt="Bahaa Logo" className="h-[120px] w-auto object-contain" />
            </Link>
            <p className="text-[18px] text-gray-600 font-salsa leading-[28px] max-w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: <WhatsappIcon />, href: "#" },
                { icon: <TwitterIcon />, href: "#" },
                { icon: <FacebookIcon />, href: "#" },
                { icon: <InstagramIcon />, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-[45px] h-[45px] rounded-full border border-dark-blue flex items-center justify-center text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-8">
            <h3 className="text-[24px] font-bold text-dark-blue mb-6 font-salsa">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Topics', 'Why Choose Us', 'Ai Supporter'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-[18px] text-gray-600 hover:text-cyan font-bold font-salsa transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Links */}
          <div className="pt-8">
            <h3 className="text-[24px] font-bold text-dark-blue mb-6 font-salsa">Extra Links</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Support / Help Center'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[18px] text-gray-600 hover:text-cyan font-bold font-salsa transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-8">
            <h3 className="text-[24px] font-bold text-dark-blue mb-6 font-salsa">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] rounded-full border border-dark-blue flex items-center justify-center text-dark-blue flex-shrink-0">
                  <MailIcon />
                </div>
                <span className="text-[18px] text-gray-600 font-bold font-salsa">info@sahlcart.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] rounded-full border border-dark-blue flex items-center justify-center text-dark-blue flex-shrink-0">
                  <PhoneIcon />
                </div>
                <span className="text-[18px] text-gray-600 font-bold font-salsa">01050809222</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-[45px] h-[45px] rounded-full border border-dark-blue flex items-center justify-center text-dark-blue flex-shrink-0">
                  <LocationIcon />
                </div>
                <span className="text-[18px] text-gray-600 font-bold font-salsa">Mosadek , Dokki - Giza</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-blue/20 pt-8 text-center">
          <p className="text-[18px] text-dark-blue font-bold font-salsa">
            Copyright © 2025 <span className="font-alexandria">Qeema tech</span> | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// SVG Icons matching the style
const WhatsappIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h-4.469l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default Footer;
