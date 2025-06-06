import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import EnquiryForm from '../components/EnquiryForm';
import SocialMedia from '../components/SocialMedia';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-black font-sans overflow-x-hidden">
      <Navigation />
      <Banner isContact={true}/>
      <EnquiryForm isContact={true} />
      <SocialMedia />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact; 