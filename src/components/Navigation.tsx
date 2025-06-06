import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const menuItems = [
    { path: '/', label: t('header.menu.home'), expandable: false },
    { path: '/about', label: t('header.menu.about'), expandable: false },
    { path: '/contact', label: t('header.menu.contact'), expandable: false },
    { path: '/news', label: t('header.menu.news'), expandable: false }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={toggleMenu}
            className="text-[#B3A06D] hover:text-[#D4C38D] transition-colors duration-300 text-lg uppercase tracking-wider font-light"
          >
            Menu
          </button>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <select 
                className="bg-transparent text-[#B3A06D] hover:text-[#D4C38D] cursor-pointer focus:outline-none"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en" className="text-black">
                  English
                </option>
                <option value="vi" className="text-black">
                  Tiếng Việt
                </option>
              </select>
            </div>
            <a href="mailto:contact@constantine.com" className="text-[#B3A06D] hover:text-[#D4C38D]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+123456789" className="text-[#B3A06D] hover:text-[#D4C38D]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Side Panel Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-[500px] bg-[#F8F8F8] shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-12">
          <div className="flex justify-between items-center mb-16">
            <button 
              onClick={toggleMenu}
              className="text-[#B3A06D] hover:text-[#D4C38D] transition-colors duration-1000 text-sm tracking-wider"
            >
              CLOSE
            </button>
          </div>
          <nav className="flex flex-col space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex justify-between items-center text-[#B3A06D] hover:text-[#D4C38D] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg tracking-wider">{item.label}</span>
                {item.expandable && (
                  <span className="text-xl group-hover:text-[#D4C38D] transition-colors duration-300">+</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style>{`
        .menu-button {
          transition: all 0.3s ease;
        }
        
        .menu-button:hover {
          opacity: 0.8;
        }
      `}</style>
    </nav>
  );
};

export default Navigation; 