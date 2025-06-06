import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
      <div className="prose max-w-none">
        {t('about.content')}
      </div>
    </div>
  );
};

export default About; 