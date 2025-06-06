import React from 'react';
import { useTranslation } from 'react-i18next';
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
`;

const slideImages = [
  banner1,
  banner2,
  banner3
];

const Banner = ({ isContact = false }) => {
  const { t } = useTranslation();

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

  return (
    <section className={`${isContact ? 'bg-white' : 'bg-black'} relative pt-20`}>
      {/* Logo and Title */}
      <div className="text-center mb-16 relative z-20">
        <h1 className="text-[#B3A06D] text-5xl heading-light">
          {t('header.fine_art_logistics')}
        </h1>
      </div>

      {/* Slider */}
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
    </section>
  );
};

export default Banner; 