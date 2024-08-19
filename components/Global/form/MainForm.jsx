'use client'
import React, { useState } from 'react';

const MainForm = ({ slug, title }) => {
    const [formData, setFormData] = useState({
        width: '',
        height: '',
        depth: '',
        quantity: '',
        unit: '',
        color: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        slug: slug || '',
        title: title || '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getBestDeal = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="text-black" onSubmit={getBestDeal}>
            <div className="grid grid-cols-12 gap-4 mb-4 h-full">
                <input
                    required
                    type="text"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="Width"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Height"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="text"
                    name="depth"
                    value={formData.depth}
                    onChange={handleChange}
                    placeholder="Depth"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4 border-b-2 border-dashed border-black pb-4">
                <input
                    required
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity 1"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled>Unit (inch / cm / mm)</option>
                    <option value="inch">Inch</option>
                    <option value="cm">Cm</option>
                    <option value="mm">Mm</option>
                </select>
                <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled>Color</option>
                    <option value="1/0">1/0</option>
                    <option value="2/0">2/0</option>
                    <option value="3/0">3/0</option>
                    <option value="4/0">4/0</option>
                </select>
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4">
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
            </div>
            <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please write any details or message... eg. Printing, Addons, Specific Box type etc."
                className="placeholder:text-black border p-2 rounded w-full mb-4"
                rows="4"
            ></textarea>
            <div className='flex justify-center items-center'>
                {isLoading ? (
                    <div className="loader flex justify-center mt-2">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        GET YOUR BEST DEAL
                    </button>
                )}
            </div>
        </form>
    );
};

export default MainForm;



