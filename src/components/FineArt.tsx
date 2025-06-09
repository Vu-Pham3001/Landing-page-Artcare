import React from 'react';

const FineArt = ({ isAbout = false }) => {
  if (!isAbout) {
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

          <h3 className="text-3xl font-light text-white mb-8">
            Royal Warrant
          </h3>
          <div className="space-y-8 text-center text-gray-300">
            <p>
              Our Royal Warrant, granted by His Majesty the King, highlights our commitment to the utmost care, precision, and professionalism in all aspects of our services.
              We continue to invest in the latest software, equipment, and materials, and above all, in our highly skilled team. Our business has grown to become the UK industry leader.
            </p>
          </div>

          <h3 className="text-3xl font-light text-white mb-8">
            Our Logistics & Moving Services
          </h3>
          <div className="space-y-8 text-center text-gray-300">
            <p>
              We provide UK and international relocation services for individuals and commercial businesses, fine art logistics for museums, galleries, and private collectors, alongside museum-grade storage solutions for fine art, goods, and valuables.<br />

              Fine Art Logistics: Our fine art logistics services are tailored to the specific needs of galleries, museums, and private collectors. We specialise in handling, packing, transporting, installing, and storing artwork, sculptures, and valuable artefacts, ensuring they reach their destination in pristine condition. Our team is dedicated to maintaining the integrity of your art while it is in our care.<br />

              UK & International Moving Services: We are your domestic and international moving experts, whether you are moving in the UK or across borders. We understand that relocating is a major life event. Our professional team takes the stress out of the process by providing comprehensive moving services. From packing and shipping to customs clearance, we ensure your belongings arrive at your new destination smoothly and securely.<br />

              Commercial and Specialist Moves: We can handle specialist and commercial projects – including office removals, library removals, laboratory removals, university & school removals, and IT removals – tailored to meet the unique needs of each client. With decades of industry experience, we understand the complexities and challenges associated with these moves. We pride ourselves on minimising downtime, ensuring safe transportation of valuable equipment, and delivering a seamless move for our clients.<br />

              Storage Solutions: We offer secure storage solutions, including museum-specification climate-controlled storage options. Whether you need long-term storage for your art collection or short-term storage for household goods, our state-of-the-art facility is equipped to meet your needs. Your valuables are safe with us, and you can access them at your convenience.<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FineArt; 