'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const InstantForm = () => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        quantity: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value, });

    const getInstantQuote = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newData = {
            ...formData,
        };

        try {
            const response = await fetch("/api/instant_quote", {
                method: "POST",
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                setIsLoading(false);
                router.push("/thank_you");
                setFormData({ name: "", email: "", phone: "", message: "", quantity: "", });

            } else {
                alert('Failed to send email.');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);
        }
    };

    return (

        <div style={{ background: 'whitesmoke' }} className="md:w-1/2 px-3 py-5 md:p-8 md:mt-0 mt-14 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Instant Quote</h2>
            <form className="space-y-4" onSubmit={getInstantQuote}>
                <input
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name='name'
                    placeholder="Enter Your Name"
                    className="w-full p-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    name='email'
                    placeholder="Email Address"
                    className="w-full p-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    onChange={handleChange}
                    value={formData.phone}
                    type="text"
                    name='phone'
                    placeholder="Phone Number"
                    className="w-full p-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    onChange={handleChange}
                    value={formData.quantity}
                    type="number"
                    name='quantity'
                    placeholder="Quantity"
                    className="w-full p-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <textarea
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Message"
                    name='message'
                    className="w-full p-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-3 dark_primary_bg text-white font-bold rounded-md transition duration-300"
                    disabled={isLoading}
                >
                    SUBMIT
                </button>
            </form>
            {/* Footer Information */}
            <div className="flex flex-wrap md:justify-between justify-center items-center mt-6 text-gray-600">
                <div className="flex items-center space-x-1">
                    <span className="text-2xl"><i class="ri-timer-flash-line"></i></span>
                    <span>Quick Turnaround</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-2xl"><i class="ri-palette-line"></i></span>
                    <span>Free Designing</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-2xl"><i class="ri-truck-line"></i></span>
                    <span>Free Shipping</span>
                </div>
            </div>
        </div>

    );
};

export default InstantForm;
