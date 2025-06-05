import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="flex justify-center pb-8 bg-[#2D2D2D]">
          <button onClick={scrollToTop} className="elementor-icon hover:opacity-80 transition-opacity duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M6 30.857h20.006v-1.802H6zM10.345 1L6.512 8.52h2.973v19.005h1.72V8.52h2.974L10.345 1zM21.66 1l-3.832 7.52H20.8v19.005h1.72V8.52h2.973L21.661 1z" fill="#8F7C54" fillRule="evenodd"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop; 