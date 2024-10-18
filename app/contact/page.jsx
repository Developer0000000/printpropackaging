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

      <section className='md:px-[var(--paddingX)] px-4 pb-10 h-full w-full relative'>

        <section className="text-gray-600 body-font relative">
          <div className="container md:px-5 py-14 md:py-24 mx-auto flex sm:flex-nowrap flex-wrap gap-10">
            <div className='flex flex-col justify-center md:gap-4 gap-y-3'>
              {ContactInfo.map((item, index) => (
                <div key={index} className='text-center flex justify-center rounded-lg py-6 px-6 space-y-2 items-center flex-col col-span-12 md:col-span-4 bg-slate-100'>
                  <div className='text-2xl bg-black text-white size-10 rounded-full flex items-center justify-center'>{item.icon}</div>
                  <h4 className='text-xl font-bold'>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <form className="lg:w-[45%] h-auto md:w-1/2 bg-gray-50 rounded-lg px-6 flex flex-col md:ml-auto w-full py-8" onSubmit={handleSubmit}>
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
                    className="text-white w-fit dark_secondary_bg border-0 py-2 px-6 focus:outline-none rounded text-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>

      </section>
    </>
  );
};

export default Contact;
