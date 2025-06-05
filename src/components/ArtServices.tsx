import React from 'react';

const ArtServices = () => {
  const services = [
    {
      title: "Transport",
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/IWM_2018_073_0010-2000x0-c-center-e1707306420941-1536x878.jpeg",
      description: "We provide a range of transport options, including road, sea, and air freight, ensuring objects in our possession reach their destination safely and securely."
    },
    {
      title: "Storage",
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/New-truck-at-Bowes-with-credit3-2000x0-c-center-1536x909.jpeg",
      description: "Our 35,000-square-foot purpose-built facility in Scotland's central belt offers museum-standard art storage and features comprehensive security systems designed to stringent UK government requirements."
    },
    {
      title: "Installation",
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2024/02/ART-STORE-29-Edit-HI-RES-3-scaled-2000x0-c-center-1536x1025.jpeg",
      description: "Constantine Scotland's experienced art handlers can professionally install and decant works to a wide variety of specifications – from delicate small objects to full-scale exhibitions."
    }
  ];

  return (
    <section className="bg-black text-white pb-10 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl heading-light">
                {service.title}
              </h3>
              <p className="body-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtServices; 