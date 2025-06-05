import React from 'react';

const SocialMedia = () => {
  return (
    <section className="bg-[#1A1A1A] py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl mb-12">
          See what we've been handling, moving<br />
          and installing
        </h2>
        
        <div className="flex justify-center gap-4">
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#B3A06D] transition-colors duration-300">
            <img src="/images/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#B3A06D] transition-colors duration-300">
            <img src="/images/instagram.svg" alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#B3A06D] transition-colors duration-300">
            <img src="/images/facebook.svg" alt="Facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#B3A06D] transition-colors duration-300">
            <img src="/images/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia; 