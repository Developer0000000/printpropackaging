'use client'
import Image from 'next/image';
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
        stock: '',
        slug: slug || '',
        title: title || '',
    });

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }
        else setFormData({ ...formData, [e.target.name]: e.target.value, });
    };

    const getBestDeal = async (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.append('name', formData.name);
        myForm.append('email', formData.email);
        myForm.append('phone', formData.phone);
        myForm.append('message', formData.message);
        myForm.append('width', formData.width);
        myForm.append('height', formData.height);
        myForm.append('depth', formData.depth);
        myForm.append('quantity', formData.quantity);
        myForm.append('unit', formData.unit);
        myForm.append('color', formData.color);
        myForm.append('stock', formData.stock);
        myForm.append('slug', formData.slug);
        myForm.append('title', formData.title);

        images.forEach((image) => {
            myForm.append('images', image);
        });

        const formObj = {};
        myForm.forEach((value, key) => {
            console.log(key);
            formObj[key] = value;
        });

        setIsLoading(true);
        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(formObj),
            });
            if (response.ok) {
                alert('Email sent successfully!');
                setIsLoading(false);
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleImgChange = (e) => {
        const files = Array.from(e.target.files);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    return (
        <form className="text-black" onSubmit={getBestDeal}>
            <div className="grid grid-cols-12 gap-4 mb-4">
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4 h-full">
                <input
                    required
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="Width"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Height"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="number"
                    name="depth"
                    value={formData.depth}
                    onChange={handleChange}
                    placeholder="Depth"
                    className="border p-2 rounded col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4">
                <select
                    required
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-12 md:col-span-6 text-black placeholder:text-black"
                >
                    <option value="" disabled>Inches</option>
                    <option value="cm">CM</option>
                    <option value="mm">MM</option>
                </select>
                <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-12 md:col-span-6 text-black placeholder:text-black"
                >
                    <option value="" disabled>Select Colour</option>
                    <option value="1 Colour">1 Colour</option>
                    <option value="2 Colour">2 Colour</option>
                    <option value="3 Colour">3 Colour</option>
                    <option value="4 Colour">4 Colour</option>
                    <option value="4/1 Colour">4/1 Colour</option>
                    <option value="4/2 Colour">4/2 Colour</option>
                    <option value="4/3 Colour">4/3 Colour</option>
                    <option value="4/4 Colour">4/4 Colour</option>
                </select>
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4 border-b-2 border-dashed border-black pb-4">
                <input
                    required
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="border p-2 rounded col-span-12 md:col-span-6 text-black placeholder:text-black"
                />

                <select
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="border p-2 rounded col-span-12 md:col-span-6 text-black placeholder:text-black"
                >
                    <option value="" disabled>Stock</option>
                    <option value="210 GSM Cardboard Stock">210 GSM Cardboard Stock</option>
                    <option value="270 GSM Cardboard Stock">270 GSM Cardboard Stock</option>
                    <option value="300 GSM Cardboard Stock">300 GSM Cardboard Stock</option>
                    <option value="310 GSM Cardboard Stock">310 GSM Cardboard Stock</option>
                    <option value="350 GSM Cardboard Stock">350 GSM Cardboard Stock</option>
                    <option value="420 GSM Cardboard Stock">420 GSM Cardboard Stock</option>
                    <option value="500 GSM Cardboard Stock">500 GSM Cardboard Stock</option>
                    <option value="Corrugated Stock">Corrugated Stock</option>
                    <option value="Kraft Stock">Kraft Stock</option>
                    <option value="Rigid Stock">Rigid Stock</option>
                    <option value="Other">Other</option>
                </select>

            </div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please write any details or message... eg. Printing, Addons, Specific Box type etc."
                className="placeholder:text-black border p-2 rounded w-full mb-4"
                rows="4"
            ></textarea>

            <div className="mb-4">
                <h2 className="mb-2 text-lg text-bold">Upload Your Artwork</h2>
                <div className="flex items-center relative">
                    <button className='artwork_btn' onClick={() => document.getElementById('getFile').click()}>Select Images</button>
                    <input className='artwork absolute z-50 opacity-0' accept='image/*' multiple type="file" name="artwork" onChange={handleImgChange} id="getFile" />
                </div>
            </div>

            <div id="imagesPreview" className='flex items-center'>
                {imagesPreview.map((image, index) => (
                    <Image width={70} height={70} key={index} src={image} alt="images Preview" />
                ))}
            </div>

            <div className='flex justify-center items-center'>
                {isLoading ? (
                    <div className="loader flex justify-center mt-2">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-2 mt-3 rounded hover:bg-green-600"
                    >
                        GET YOUR BEST DEAL
                    </button>
                )}
            </div>
        </form>
    );
};

export default MainForm;