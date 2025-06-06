import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl mb-4">{t('contact.form_title')}</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">{t('contact.name')}</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">{t('contact.email')}</label>
              <input type="email" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">{t('contact.message')}</label>
              <textarea className="w-full p-2 border rounded h-32"></textarea>
            </div>
            <button className="bg-[#B3A06D] text-white px-6 py-2 rounded hover:bg-[#D4C38D]">
              {t('contact.send')}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl mb-4">{t('contact.info_title')}</h2>
          <div className="space-y-4">
            <p>{t('contact.address')}</p>
            <p>{t('contact.phone')}</p>
            <p>{t('contact.email_info')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 