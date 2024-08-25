'use client';
import Accordions from '@/components/Global/Accordions';
import PageTitle from '@/components/Global/pageTitle';
import { ContactInfo } from '@/config/ContactData';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/thank_you');
        setIsLoading(false);
        setFormData({
          name: '',
          email: '',
          query: '',
          message: ''
        });
      } else {
        alert('Failed to send email.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    document.title = 'Custom Boxes Wholesale - Contact Us';
  }, []);

  return (
    <>
      <PageTitle currentPageTitle='Contact PrintPro Packaging' currentPage='Contact' prevPage='Home' />

      <section className='md:px-[var(--paddingX)] px-4 py-20 h-full w-full relative'>
        <div className='grid grid-cols-12 md:gap-10 gap-y-8'>
          {ContactInfo.map((item, index) => (
            <div key={index} className='text-center flex justify-center rounded-lg py-10 px-6 space-y-2 items-center flex-col col-span-12 md:col-span-4 bg-slate-100'>
              <div className='text-4xl bg-black text-white size-16 rounded-full flex items-center justify-center'>{item.icon}</div>
              <h4 className='text-2xl font-bold'>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <section className="text-gray-600 body-font relative">
          <div className="container md:px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-10">
            <form className="lg:w-[45%] md:w-1/2 bg-gray-50 rounded-lg px-6 flex flex-col md:ml-auto w-full py-8" onSubmit={handleSubmit}>
              <h2 className="text-gray-900 text-2xl font-bold title-font pb-4">Write Us Your Concerns</h2>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  placeholder='Enter Your Name*'
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  placeholder='Enter Your Email*'
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                  placeholder='Enter Your Query*'
                />
              </div>
              <div className="relative mb-6">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder='Please Leave a Message*'
                  required
                ></textarea>
              </div>
              <div className='flex justify-center items-center'>
                {isLoading ? (
                  <div className="loader flex justify-center mt-2">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="text-white w-fit bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
            <div className="lg:w-[55%] md:w-1/2 w-full h-[70vh] md:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </section>

        <section className='h-full w-full relative'>
          <Accordions />
        </section>
      </section>
    </>
  );
};

export default Contact;
