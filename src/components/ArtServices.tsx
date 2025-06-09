import React from 'react';
import { useTranslation } from 'react-i18next';

const ArtServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'international_shipping',
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/IWM_2018_073_0010-2000x0-c-center-e1707306420941-1536x878.jpeg",
    },
    {
      key: 'packaging_preservation',
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/New-truck-at-Bowes-with-credit3-2000x0-c-center-1536x909.jpeg",
    },
    {
      key: 'customs_clearance',
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/ART-STORE-29-Edit-HI-RES-3-scaled-2000x0-c-center-1536x1025.jpeg",
    },
    {
      key: 'art_insurance',
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/IWM_2018_073_0010-2000x0-c-center-e1707306420941-1536x878.jpeg",
    },
  ];

  return (
    <section className="bg-black text-white pb-10 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {services.map((service) => (
            <div key={service.key} className="space-y-6">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={t(`art_services.${service.key}.title`)}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl heading-light">
                {t(`art_services.${service.key}.title`)}
              </h3>
              <p className="body-text">
                {t(`art_services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtServices; 