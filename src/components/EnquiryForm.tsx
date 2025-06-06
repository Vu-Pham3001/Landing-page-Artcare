import React, { useState } from 'react';


const email = 's2ttts1617302@gmail.com';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    email: '',
    telephone: '',
    enquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const titleOptions = [
    "Mr",
    "Mrs",
    "Miss",
    "Ms",
    "Other"
  ];

  const enquiryTypes = [
    "Fire Art Services",
    "International Moving",
    "European Moving",
    "Moving within the UK",
    "Commercial/Business Move",
    "Storage",
    "General Enquiry"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('Form submitted');
    e.preventDefault();
    
    // Log form data to verify it's being captured
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // For testing - simulate API call
    console.log('Sending to:', 'hienxu88.hp@gmail.com');
    
    // Simple POST request
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // access_key: '3ca65125-0e68-4937-8788-6c8eb49c832e',
        access_key: '47d7a8f3-19c1-4dd6-93c8-62f9c0fb9596',
        title: formData.title,
        name: formData.fullName,
        email: formData.email,
        phone: formData.telephone,
        enquiry_type: formData.enquiryType,
        message: formData.message,
        to_email: email
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response:', data);
      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your enquiry. We will get back to you soon.'
        });
        setFormData({
          title: '',
          fullName: '',
          email: '',
          telephone: '',
          enquiryType: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 px-6 md:px-0">
          <h2 className="text-[#B3A06D] text-4xl heading-light mb-6">
            Make an Enquiry
          </h2>
          <p className="text-black">
            Our fine arts logistics services are tailored to your needs. Contact us today for a quote or if you have any
            questions. Please provide as much information as you can, and we will get back to you as soon as possible.
          </p>
        </div>

        {submitStatus.type && (
          <div className={`mb-6 p-4 text-center rounded ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form 
          onSubmit={handleSubmit}
          className="space-y-4 px-6 md:px-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-[#B3A06D] text-sm mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D] appearance-none h-[50px]"
                required
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1em'
                }}
              >
                <option value="">- Please select -</option>
                {titleOptions.map((title) => (
                  <option key={title} value={title} className="bg-white">
                    {title}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[#B3A06D] text-sm mb-2">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D] h-[50px]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#B3A06D] text-sm mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D] h-[50px]"
                required
              />
            </div>

            {/* Telephone */}
            <div>
              <label htmlFor="telephone" className="block text-[#B3A06D] text-sm mb-2">
                Telephone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D] h-[50px]"
                required
              />
            </div>
          </div>

          {/* Enquiry Type */}
          <div>
            <label htmlFor="enquiryType" className="block text-[#B3A06D] text-sm mb-2">
              Enquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D] appearance-none h-[50px]"
              required
              style={{
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1em'
              }}
            >
              <option value="">- Please select -</option>
              {enquiryTypes.map((type) => (
                <option key={type} value={type} className="bg-white">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-[#B3A06D] text-sm mb-2">
              Enquiry Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full p-3 bg-white border border-[#B3A06D] text-black focus:outline-none focus:ring-2 focus:ring-[#B3A06D]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#B3A06D] text-white py-3 px-6 mt-6 h-[50px] transition-colors duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#9F8C5C]'
            }`}
            onClick={() => console.log('Button clicked')}
          >
            {isSubmitting ? 'Sending...' : 'SUBMIT'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm; 