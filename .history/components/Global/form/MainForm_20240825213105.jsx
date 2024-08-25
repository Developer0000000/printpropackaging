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
        printing: '',
        stock: '',
        cardThickness: '',
        extraFinishes: '',
        lamination: '',
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

    // make it short 

    const getBestDeal = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const myForm = new FormData();
        Object.entries(formData).forEach(([key, value]) => myForm.append(key, value));
        if (images.length > 0) {
            images.forEach((image) => myForm.append('images', image));
        }

        try {
            const response = await fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(myForm)),
            });

            if (response.ok) {
                alert('Email sent successfully!');
                setFormData({
                    width: '', height: '', depth: '', quantity: '', unit: '', color: '', name: '', email: '', phone: '', message: '', cardThickness: '', extraFinishes: '', lamination: '', stock: '', printing: '', slug: slug || '', title: title || ''
                });
                setImages([]);
                setImagesPreview([]);
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
            <div className="grid grid-cols-12 gap-2 mb-2">
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="border p-1.5 col-span-12 text-black placeholder:text-black"
                />
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="border p-1.5 col-span-12 md:col-span-6 text-black placeholder:text-black"
                />
                <input
                    required
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border p-1.5 col-span-12 md:col-span-6 text-black placeholder:text-black"
                />
            </div>
            <div className="grid grid-cols-12 gap-2 mb-2 h-full">
                <input
                    required
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="Width"
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="Height"
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
                <input
                    required
                    type="number"
                    name="depth"
                    value={formData.depth}
                    onChange={handleChange}
                    placeholder="Depth"
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                />
            </div>
            <div className="grid grid-cols-12 gap-2 mb-2">
                <select
                    required
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled selected>Inches</option>
                    <option value="cm">CM</option>
                    <option value="mm">MM</option>
                </select>
                <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled selected>Select Colour</option>
                    <option value="1 Colour">1 Colour</option>
                    <option value="2 Colour">2 Colour</option>
                    <option value="3 Colour">3 Colour</option>
                    <option value="4 Colour">4 Colour</option>
                    <option value="4/1 Colour">4/1 Colour</option>
                    <option value="4/2 Colour">4/2 Colour</option>
                    <option value="4/3 Colour">4/3 Colour</option>
                    <option value="4/4 Colour">4/4 Colour</option>
                </select>
                <select
                    name="printing"
                    value={formData.printing}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="Printing" disabled selected>Printing</option>
                    <option value="Outside only">Outside only</option>
                    <option value="Inside only">Inside only</option>
                    <option value="Both side">Both side</option>

                </select>
                <select
                    name="cardThickness"
                    value={formData.cardThickness}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled selected> Card Thickness </option>
                    <option value="12pt (250 GSM)">12pt (250 GSM)</option>
                    <option value="14pt (270 GSM)"> 14pt(270 GSM) </option>
                    <option value="16pt (300 GSM)">16pt (300 GSM)</option>
                    <option value="18pt (350 GSM)"> 18pt(350 GSM) </option>
                    <option value="20pt (420 GSM)">20pt (420 GSM)</option>
                    <option value="22pt (460 GSM)"> 22pt(460 GSM) </option>
                    <option value="24pt (500 GSM)">24pt (500 GSM)</option>
                    <option value="Corrugated"> Corrugated </option>
                    <option value="Kraft Stock">Kraft Stock</option>
                    <option value="Rigid Stock"> Rigid Stock </option>
                    <option value="Other">Other</option>
                </select>
                <select
                    name="extraFinishes"
                    value={formData.extraFinishes}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled selected>Extra Finishes</option>
                    <option value="Debossing">Debossing</option>
                    <option value="Embossing">Embossing</option>
                    <option value="Foiling">Foiling</option>
                    <option value="Spot UV / Spot gloss">Spot UV / Spot gloss</option>
                    <option value="Raised Spot / UV">Raised Spot / UV</option>
                    <option value="Holographic Foiling">Holographic Foiling</option>
                </select>
                <select
                    name="lamination"
                    value={formData.lamination}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-4 text-black placeholder:text-black"
                >
                    <option value="" disabled selected>Lamination</option>
                    <option value="Glossy lamination">Glossy lamination</option>
                    <option value="Matte lamination">Matte lamination</option>
                    <option value="Soft touch / Silk lamination">Soft touch / Silk lamination</option>
                    <option value="Aqueous coating">Aqueous coating</option>
                    <option value="Crystal UV / Liquid UV">Crystal UV / Liquid UV</option>
                </select>
            </div>
            <div className="grid grid-cols-12 gap-2 mb-2 border-b-2 border-dashed border-black pb-4">

                <input
                    required
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="border p-1.5 col-span-12 md:col-span-6 text-black placeholder:text-black"
                />
                <select
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="border p-1.5 col-span-12 md:col-span-6 text-black placeholder:text-black"
                >
                    <option value="" disabled selected>Stock</option>
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
                className="placeholder:text-black border p-1.5 w-full mb-4"
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
                        className="bg-green-500 text-white px-4 py-2 mt-3 hover:bg-green-600"
                    >
                        GET YOUR BEST DEAL
                    </button>
                )}
            </div>
        </form>
    );
};

export default MainForm;