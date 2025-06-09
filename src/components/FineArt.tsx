import React from 'react';
import { useTranslation } from 'react-i18next';

const FineArt = ({ isAbout = false }) => {
  const { t } = useTranslation();

  if (!isAbout) {
    return (
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-light text-white mb-8">
              {t('fine_art.excellence_title')}
            </h2>

            <div className="space-y-8 text-center text-gray-300">
              <p>
                {t('fine_art.excellence_content')}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-12">
          <h2 className="text-4xl font-light text-white mb-8">
            {t('fine_art.about_title')}
          </h2>

          <h3 className="text-2xl font-light text-white mb-8">
            {t('fine_art.art_protecting_art')}
          </h3>
          <div className="space-y-8 text-center text-gray-300">
            <p>
              {t('fine_art.about_content')}<br />
              {t('fine_art.about_content_2')}
            </p>
          </div>

          <h2 className="text-4xl font-light text-white mb-8">
            {t('fine_art.why_choose')}
          </h2>

          <h3 className="text-2xl font-light text-white mb-8">
            {t('fine_art.global_network')}
          </h3>
          <div className="space-y-8 text-center text-gray-300 max-w-2xl mx-auto">
            <p>
              {t('fine_art.global_network_content')}
            </p>
          </div>

          <h3 className="text-2xl font-light text-white mb-8">
            {t('fine_art.unique_journey')}
          </h3>

          <div className="space-y-8 text-center text-gray-300 max-w-2xl mx-auto">
            <p>
              {t('fine_art.unique_journey_content')}
            </p>
          </div>

          <h3 className="text-2xl font-light text-white mb-8">
            {t('fine_art.absolute_confidentiality')}
          </h3>

          <div className="space-y-8 text-center text-gray-300 max-w-2xl mx-auto">
            <p>
              {t('fine_art.confidentiality_content')}
            </p>
          </div>

          <h3 className="text-2xl font-light text-white mb-8">
            {t('fine_art.transparent_process')}
          </h3>

          <div className="space-y-8 text-center text-gray-300 max-w-2xl mx-auto">
            <p>
              {t('fine_art.process_content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FineArt; 