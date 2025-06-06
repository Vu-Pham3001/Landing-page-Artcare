import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

// Add custom CSS for fade effect
const fadeStyles = `
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transition-timing-function: ease-out;
  }

  .slick-slide {
    opacity: 0;
    transition: opacity 1000ms ease;
    position: relative;
  }

  .slick-slide.slick-active {
    opacity: 1;
    z-index: 1;
  }

  .slick-slide > div {
    height: 100vh;
  }

  .menu-overlay {
    transition: all 0.3s ease-in-out;
    transform: translateX(-100%);
  }

  .menu-overlay.open {
    transform: translateX(0);
  }

  .menu-button {
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    padding: 8px;
    transition: all 0.3s ease;
  }

  .menu-button:hover {
    background: rgba(179, 160, 109, 0.1);
  }

  .menu-button span {
    display: block;
    position: absolute;
    height: 2px;
    width: 16px;
    background: #B3A06D;
    opacity: 1;
    transition: .25s ease-in-out;
  }

  .menu-button span:nth-child(1) {
    top: 12px;
    left: 10px;
  }

  .menu-button span:nth-child(2) {
    top: 19px;
    left: 10px;
  }

  .menu-button span:nth-child(3) {
    top: 26px;
    left: 10px;
  }

  .close-button {
    width: 32px;
    height: 32px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .close-button:hover {
    transform: rotate(90deg);
  }

  .close-button::before,
  .close-button::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background-color: #B3A06D;
    top: 50%;
    left: 50%;
    transition: background-color 0.3s ease;
  }

  .close-button:hover::before,
  .close-button:hover::after {
    background-color: #D4C38D;
  }

  .close-button::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close-button::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const slideImages = [
  banner1,
  banner2,
  banner3
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'ease-out'
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const menuItems = [
    { path: '/', label: t('header.menu.home') },
    { path: '/about', label: t('header.menu.about') },
    { path: '/contact', label: t('header.menu.contact') },
    { path: '/news', label: t('header.menu.news') }
  ];

  return (
    <header className="bg-black lg:min-h-screen relative">
      {/* Menu Button and Language Selector */}
      <div className="container mx-auto px-4 py-6 relative z-50">
        <div className="flex justify-between items-center">
          <div 
            className="menu-button"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <select 
                className="bg-transparent text-[#B3A06D] hover:text-[#D4C38D] cursor-pointer focus:outline-none"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en" className="flex items-center">
                  English
                </option>
                <option value="vi" className="flex items-center">
                  Tiếng Việt
                </option>
              </select>
            </div>
            <a href="mailto:contact@constantine.com" className="text-[#B3A06D] hover:text-[#D4C38D]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="tel:+1234567890" className="text-[#B3A06D] hover:text-[#D4C38D]">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Side Panel Menu */}
      <div 
        className={`menu-overlay fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 ${
          isMenuOpen ? 'open' : ''
        }`}
      >
        <div className="p-8">
          <div className="flex justify-end mb-8">
            <div className="close-button" onClick={toggleMenu} />
          </div>
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[#B3A06D] hover:text-[#D4C38D] text-xl font-light transition-colors duration-300 ${
                  location.pathname === item.path ? 'border-l-4 border-[#B3A06D] pl-4' : 'pl-4'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
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

      {/* Logo and Title */}
      <div className="text-center mb-16 relative z-20">
        <h1 className="text-[#B3A06D] text-5xl heading-light">
          {t('header.fine_art_logistics')}
        </h1>
      </div>

      {/* Centered Slider */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <Slider {...sliderSettings}>
          {slideImages.map((image, index) => (
            <div key={index} className="px-4">
              <div className="aspect-[16/9] relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url("${image}")`,
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{fadeStyles}</style>
    </header>
  );
};

export default Header; 