import React from 'react';

const FineArt = ({ isAbout = false }) => {
  if (isAbout) {
    return (
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-12">
            <h2 className="text-4xl font-light text-white mb-8">
              Fine Art Logistics for Scotland's Private<br />
              Collectors, Museums, & Galleries
            </h2>

            <div className="space-y-8 text-center text-gray-300">
              <p>
                We are Scotland's premier provider of fine art logistics. Our extensive services cover UK and international art
                transportation, bespoke packing and case-making solutions, temperature and humidity-controlled museum-grade
                art storage, art installation, and customs support. All our services can be expertly tailored to meet your
                project's unique requirements.
              </p>

              <p>
                Our Royal Warrant, granted by His Majesty the King, is a testament to our high standards, quality, and
                expertise. Constantine Scotland is trusted by the country's leading institutions and collectors.
              </p>

              <p>
                Through our exclusive{' '}
                <a
                  href="#"
                  className="text-[#B3A06D] hover:text-[#D4C38D] transition-colors"
                >
                  partnership with ICM
                </a>
                , we can provide their humidity-regulated warm air treatment
                process at our high-security storage facility. This sustainable method for eradicating heritage-eating insect
                pests is suitable for artwork, furniture, antiques, and museum collections. Get in touch via the contact form
                below for more information and to book this service.
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
            Moving Company Since 1885
          </h2>

          <h3 className="text-3xl font-light text-white mb-8">
            What Makes Us Different
          </h3>
          <div className="space-y-8 text-center text-gray-300">
            <p>
              Constantine Scotland is an industry leader, providing fine-art logistics, international moving services, commercial moves, and secure storage solutions. We are part of Constantine Ltd, founded in 1885, and have established offices in Glasgow, Central London, Heathrow, and the Middle East.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FineArt; 