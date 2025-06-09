import React from 'react';
import millonVietnam from '../assets/images/footer/1update_millonvietnam.png';
import abijgaartWestQuimper from '../assets/images/footer/adjugart-brest-quimper-blanc.png';
import alexanderAntique from '../assets/images/footer/alexander-antique.png';
import andrewJonesAuctions from '../assets/images/footer/Andrew-Jones-Auctions-Cover.png';
import bonhamsLogo from '../assets/images/footer/Bonhams-Logo.png';
import cheffinsArt from '../assets/images/footer/Cheffins-Fine-Art-Logo.png';
import conanBelleville from '../assets/images/footer/Conan-Belleville-Logo.png';
import cottonAuction from '../assets/images/footer/Cotton-Auction-Footer-Logo.png';
import debackerRichmond from '../assets/images/footer/debacker-richmond.png';
import delonHoebanx from '../assets/images/footer/Delon-Hoebanx-Logo.png';
import freemanHindman from '../assets/images/footer/Freeman-Hindman.webp';
import jsFineArt from '../assets/images/footer/JS-Fine-Art-Logo.png';
import kevinPageAntiques from '../assets/images/footer/Kevin-Page-Antiques-Logo.webp';
import nagelLogo from '../assets/images/footer/Nagel-Logo.png';
import setdartAuction from '../assets/images/footer/Setdart-Auction-Gallery-4.png';
import subarnaAuction from '../assets/images/footer/Subarna-Auction-House-Logo.png';

const Footer = () => {
  const navLinks = [
    'Fine Art Logistics',
    'International Removals',
    'UK Removals',
    'Commercial Removals & Storage',
    'Storage Solutions'
  ];

  const certifications = [
    { src: millonVietnam, alt: 'Millon Vietnam' },
    { src: abijgaartWestQuimper, alt: 'Adjugart Brest Quimper' },
    { src: alexanderAntique, alt: 'Alexander Antique' },
    { src: andrewJonesAuctions, alt: 'Andrew Jones Auctions' },
    { src: bonhamsLogo, alt: 'Bonhams' },
    { src: cheffinsArt, alt: 'Cheffins Fine Art' },
    { src: conanBelleville, alt: 'Conan Belleville' },
    { src: cottonAuction, alt: 'Cotton Auction' },
    { src: debackerRichmond, alt: 'Debacker Richmond' },
    { src: delonHoebanx, alt: 'Delon Hoebanx' },
    { src: freemanHindman, alt: 'Freeman Hindman' },
    { src: jsFineArt, alt: 'JS Fine Art' },
    { src: kevinPageAntiques, alt: 'Kevin Page Antiques' },
    { src: nagelLogo, alt: 'Nagel' },
    { src: setdartAuction, alt: 'Setdart Auction Gallery' },
    { src: subarnaAuction, alt: 'Subarna Auction House' }
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
              <div 
                key={index} 
                className="bg-[#363636] hover:bg-[#404040] rounded-lg p-4 transition-all duration-300 ease-in-out"
              >
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  className="w-[60px] h-[30px] md:w-[100px] md:h-[40px] object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                />
              </div>
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