import React, { useState } from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
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
`;

const slideImages = [
  banner1,
  banner2,
  banner3
];


const Header = () => {
  const { t, i18n } = useTranslation();
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-black lg:min-h-screen">
      {/* Top Navigation */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <button className="text-[#B3A06D] text-lg nav-text">
            
          </button>
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
            <a href="#locations" className="text-[#B3A06D] hover:text-[#D4C38D] flex items-center nav-text">
              {t('header.locations')}
            </a>
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

      {/* Logo and Title */}
      <div className="text-center mb-16">
        <h1 className="text-[#B3A06D] text-5xl heading-light">
          {t('header.fine_art_logistics')}
        </h1>
      </div>

      {/* Centered Slider */}
      <div className="container mx-auto px-4 max-w-7xl">
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
    </header>
  );
};

export default Header; 