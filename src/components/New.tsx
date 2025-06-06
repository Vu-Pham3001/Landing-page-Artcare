import React from 'react';

const New = () => {
  const newsItems = [
    {
      image: 'https://www.constantinescotland.co.uk/wp-content/uploads/2024/03/scotland_transport-1-768x401.jpg',
      title: 'SAFETY AND SECURITY ENTRY SUMMARY DECLARATIONS (ENS)',
      link: '#'
    },
    {
      image: "https://www.constantinescotland.co.uk/wp-content/uploads/2025/01/Constantine-Scotland-tote-768x432.jpg",
      title: 'ANNOUNCING THE 2024 TOTE BAG COMPETITION WINNER',
      link: '#'
    },
    {
      image: 'https://www.constantinescotland.co.uk/wp-content/uploads/2024/01/Planet-Mark-Hero-Image-2-1000x0-c-center-768x480.png',
      title: 'CONSTANTINE SCOTLAND PARTNERS WITH ICM',
      link: '#'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl mb-16 uppercase tracking-wider text-[#8B7355]">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden mb-4 border-2 border-[#8B7355] p-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg mb-4 font-light text-[#8B7355] hover:text-[#B3A06D] transition-colors duration-300">
                {item.title}
              </h3>
              <a
                href={item.link}
                className="inline-block text-[#8B7355] hover:text-[#B3A06D] transition-colors duration-300 uppercase text-sm tracking-wider text-underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default New; 