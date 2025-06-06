import React from 'react';
import { useTranslation } from 'react-i18next';

const News = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('news.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-gray-200"></div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {t(`news.article${item}.title`)}
              </h2>
              <p className="text-gray-600 mb-4">
                {t(`news.article${item}.excerpt`)}
              </p>
              <button className="text-[#B3A06D] hover:text-[#D4C38D]">
                {t('news.read_more')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News; 