import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-[#2D2D2D] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* iPad Image */}
          <div className="relative">
            <img 
              src="https://www.constantinescotland.co.uk/wp-content/uploads/2024/01/Const_newsletter_ipad_email-1200x0-c-center-768x768.png" 
              alt="Newsletter on iPad" 
              className="w-full max-w-md mx-auto transform -rotate-12"
            />
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md">
            <h2 className="text-white text-4xl mb-4">Newsletter Sign-up</h2>
            <p className="text-white mb-8">
              Receive the latest news and events from Constantine
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 bg-transparent border-b border-[#B3A06D] text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 bg-transparent border-b border-[#B3A06D] text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-transparent border-b border-[#B3A06D] text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full p-3 bg-transparent border-b border-[#B3A06D] text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B3A06D] text-white py-3 px-6 mt-6 hover:bg-[#9F8C5C] transition-colors duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 