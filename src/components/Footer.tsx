import React from 'react';

const Footer = () => {
  const navLinks = [
    'Fine Art Logistics',
    'International Removals',
    'UK Removals',
    'Commercial Removals & Storage',
    'Storage Solutions'
  ];

  const certifications = [
    { src: '/images/cert1.png', alt: 'Furniture Ombudsman' },
    { src: '/images/cert2.png', alt: 'Quality Service' },
    { src: '/images/cert3.png', alt: 'ARTIM' },
    { src: '/images/cert4.png', alt: 'Certification 4' },
    { src: '/images/cert5.png', alt: 'Approved Code' },
    { src: '/images/cert6.png', alt: 'FIDI' },
    { src: '/images/cert7.png', alt: 'FAIM' },
    { src: '/images/cert8.png', alt: 'IAM' },
    { src: '/images/cert9.png', alt: 'FIDI 2' }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 text-sm">
          {navLinks.map((link, index) => (
            <React.Fragment key={link}>
              <a href="#" className="hover:text-[#B3A06D] transition-colors duration-300">
                {link}
              </a>
              {index < navLinks.length - 1 && <span className="text-[#B3A06D]">|</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Logo and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <img src="/images/logo.png" alt="Constantine Scotland" className="h-12 mb-6 md:mb-0" />
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="tel:+44(0)1236750055" className="hover:text-[#B3A06D] transition-colors duration-300">
              +44 (0)1236 750 055
            </a>
            <a href="mailto:enquiries@constantinemoving.com" className="hover:text-[#B3A06D] transition-colors duration-300">
              enquiries@constantinemoving.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#B3A06D] transition-colors duration-300">Policies</a>
              <a href="#" className="w-6 h-6">
                <img src="/images/twitter.svg" alt="Twitter" className="w-full h-full" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/images/instagram.svg" alt="Instagram" className="w-full h-full" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/images/facebook.svg" alt="Facebook" className="w-full h-full" />
              </a>
              <a href="#" className="w-6 h-6">
                <img src="/images/linkedin.svg" alt="LinkedIn" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <p className="text-sm mb-6">We adhere to the British Association of Removers Alternative Dispute Resolution Scheme which is independently operated by;</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <img key={index} src={cert.src} alt={cert.alt} className="h-12 object-contain" />
            ))}
          </div>
        </div>

        {/* Legal Text */}
        <p className="text-xs text-center">
          Constantine Limited is an authorised member and agent of The Movers Trading Club Ltd (MTC) which is a Foreign (non-USA) based 'Non Vessel Operating Common Carrier' (NVOCC) registered with the US Federal Maritime Commission (FMC), organisation number 025520.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 