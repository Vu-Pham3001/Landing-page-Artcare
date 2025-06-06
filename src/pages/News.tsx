import React from 'react';
import { useTranslation } from 'react-i18next';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import New from '../components/New';
import SocialMedia from '../components/SocialMedia';
import Navigation from '../components/Navigation';

const News = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black  overflow-hidden">
      <Navigation />
      <New />
      <SocialMedia />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default News; 