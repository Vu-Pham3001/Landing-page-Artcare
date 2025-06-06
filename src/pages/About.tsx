import React from 'react';
import { useTranslation } from 'react-i18next';
import FineArt from '../components/FineArt';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import EnquiryForm from '../components/EnquiryForm';
import SocialMedia from '../components/SocialMedia';
import Newsletter from '../components/Newsletter';
import ScrollToTop from '../components/ScrollToTop';
import Footer from '../components/Footer';
      
const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black  overflow-hidden">
      <Navigation />
      <Banner />
      <FineArt isAbout={true}/>
      <EnquiryForm isAbout={true}/>
      <SocialMedia />
      <Newsletter />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About; 