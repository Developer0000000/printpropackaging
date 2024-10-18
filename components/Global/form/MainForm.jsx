'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const MainForm = ({ slug, title }) => {

    const router = useRouter()

    const [formData, setFormData] = useState({
        length: '',
        width: '',
        height: '',
        qty1: '',
        qty2: '',
        qty3: '',
        printSide: 'Outside',
        color: '1 Color',
        unit: 'in',
        finishing: 'Matte',
        material: 'Cardboard',
        addOns: {
            spotUV: false,
            emboss: false,
            foil: false,
            insert: false,
            windowPatching: false,
        },

        name: "",
        email: "",
        phone: "",
        message: "",

        slug: slug || "",
        title: title || "",

    });

    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);

    const [isLoading, setIsLoading] = useState(false);


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

    // Handles input change for text, radio buttons
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handles checkbox changes for add-ons
    const handleCheckboxChange = (e) => {
        setFormData({
            ...formData,
            addOns: { ...formData.addOns, [e.target.name]: e.target.checked },
        });
    };

    // Handles unit change when one of the unit buttons is clicked
    const handleUnitChange = (unit) => {
        setFormData({ ...formData, unit });
    };

    const getBestDeal = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const newData = {
            ...formData,
            images
        };

        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                body: JSON.stringify(newData),
            });

            if (response.ok) {

                setIsLoading(true);

                router.push("/thank_you");

                document.querySelector('.pop__up').style.display = 'none';
                setFormData({
                    length: '',
                    width: '',
                    height: '',
                    qty1: '',
                    qty2: '',
                    qty3: '',
                    printSide: 'Outside',
                    color: '1 Color',
                    unit: 'in',
                    finishing: 'Matte',
                    addOns: {
                        spotUV: false,
                        emboss: false,
                        foil: false,
                        insert: false,
                        windowPatching: false,
                    },

                    name: "",
                    email: "",
                    phone: "",
                    message: "",

                    slug: slug || "",
                    title: title || "",

                });
                setImages([]);
                setImagesPreview([]);
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
        <form onSubmit={getBestDeal} className="space-y-2.5">

            <div className="flex justify-end" role="group">
                <button
                    type="button"
                    className={`px-1.5 py-0.5 text-sm font-medium text-black border border-black ${formData.unit === 'in' ? 'bg-black text-gray-50' : 'bg-transparent'}`}
                    onClick={() => handleUnitChange('in')}>
                    in
                </button>
                <button
                    type="button"
                    className={`px-1.5 py-0.5 text-sm font-medium text-black border border-black ${formData.unit === 'cm' ? 'bg-black text-gray-50' : 'bg-transparent'}`}
                    onClick={() => handleUnitChange('cm')}>
                    cm
                </button>
                <button
                    type="button"
                    className={`px-1.5 py-0.5 text-sm font-medium text-black border border-black ${formData.unit === 'mm' ? 'bg-black text-gray-50' : 'bg-transparent'}`}
                    onClick={() => handleUnitChange('mm')}>
                    mm
                </button>
            </div>

            {/* Box Size Inputs */}
            <div className="space-y-2">
                <label className="font-semibold text-black"><i className="ri-checkbox-multiple-blank-line text-lg"></i> Box Size:</label>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        name="length"
                        placeholder="Length"
                        value={formData.length}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                    <input
                        type="text"
                        name="width"
                        placeholder="Width"
                        value={formData.width}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                    <input
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                </div>
            </div>


            {/* Quantity Inputs */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-microsoft-line text-lg"></i> Qty:</label>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        name="qty1"
                        placeholder="Qty 1"
                        value={formData.qty1}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                    <input
                        type="text"
                        name="qty2"
                        placeholder="Qty 2"
                        value={formData.qty2}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                    <input
                        type="text"
                        name="qty3"
                        placeholder="Qty 3"
                        value={formData.qty3}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded text-black"
                    />
                </div>
            </div>


            {/* Print Side */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-footprint-line text-lg"></i> Print Side:</label>
                <div className="flex space-x-4">
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="printSide"
                            value="Outside"
                            checked={formData.printSide === 'Outside'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Outside
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="printSide"
                            value="Inside"
                            checked={formData.printSide === 'Inside'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Inside
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="printSide"
                            value="Both Sides"
                            checked={formData.printSide === 'Both Sides'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Both Sides
                    </label>
                </div>
            </div>

            {/* Colors */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-palette-line text-lg"></i> Colors:</label>
                <div className="flex space-x-4">
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="color"
                            value="1 Color"
                            checked={formData.color === '1 Color'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        1 Color
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="color"
                            value="2 Color"
                            checked={formData.color === '2 Color'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        2 Color
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="color"
                            value="3 Color"
                            checked={formData.color === '3 Color'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        3 Color
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="color"
                            value="Full"
                            checked={formData.color === 'Full'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Full
                    </label>
                </div>
            </div>

            {/* Finishing */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-timer-flash-line text-lg"></i> Finishing:</label>
                <div className="flex space-x-4">
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="finishing"
                            value="Matte"
                            checked={formData.finishing === 'Matte'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Matte
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="finishing"
                            value="Gloss"
                            checked={formData.finishing === 'Gloss'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Gloss
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="finishing"
                            value="Clear Coat"
                            checked={formData.finishing === 'Clear Coat'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Clear Coat
                    </label>
                </div>
            </div>

            {/* Material Type */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-archive-2-line text-lg"></i> Material:</label>
                <div className="flex space-x-4">
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="material"
                            value="Cardboard"
                            checked={formData.material === 'Cardboard'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Cardboard
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="material"
                            value="Corrugated"
                            checked={formData.material === 'Corrugated'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Corrugated
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="material"
                            value="Kraft"
                            checked={formData.material === 'Kraft'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Kraft
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="radio"
                            name="material"
                            value="Rigid"
                            checked={formData.material === 'Rigid'}
                            onChange={handleInputChange}
                            className="mr-1"
                        />
                        Rigid
                    </label>
                </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-1">
                <label className="font-semibold text-black"> <i className="ri-apps-2-add-line text-lg"></i> Add-ons:</label>
                <div className="flex space-x-4">
                    <label className='text-gray-700'>
                        <input
                            type="checkbox"
                            name="spotUV"
                            checked={formData.spotUV}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                        />
                        Spot UV
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="checkbox"
                            name="foil"
                            checked={formData.foil}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                        />
                        Foil
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="checkbox"
                            name="emboss"
                            checked={formData.emboss}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                        />
                        Emboss/Deboss
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="checkbox"
                            name="insert"
                            checked={formData.insert}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                        />
                        Insert
                    </label>
                    <label className='text-gray-700'>
                        <input
                            type="checkbox"
                            name="windowPatching"
                            checked={formData.windowPatching}
                            onChange={handleCheckboxChange}
                            className="mr-1"
                        />
                        Window Patching
                    </label>
                </div>
            </div>


            {/* Contact Info */}
            <div className="space-y-1">

                <h1 className="font-semibold text-black mt-1"> <i className="ri-user-line text-lg"></i> Personal Details</h1>

                <div className="grid grid-cols-12 gap-4">
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded col-span-12 md:col-span-6 text-black"
                    />
                    <input
                        required
                        type="number"
                        name="phone"
                        placeholder="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-2 rounded col-span-12 md:col-span-6 text-black"
                    />
                </div>

                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded text-black"
                />

                <textarea

                    name="message"
                    placeholder="Additional Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 p-2 rounded text-black"
                    rows={5}
                />

            </div>

            <div>
                <h1 className="my-1 font-semibold text-black"> <i className="ri-upload-line text-lg "></i> Upload Your Artwork</h1>
                <div className="flex items-center relative">
                    <button
                        className="artwork_btn"
                        onClick={() => document.getElementById("getFile").click()}
                    >
                        Select Images
                    </button>
                    <input
                        className="artwork absolute z-50 opacity-0"
                        accept="image/*"
                        multiple
                        type="file"
                        name="artwork"
                        onChange={handleImgChange}
                        id="getFile"
                    />
                </div>
            </div>

            <div id="imagesPreview" className="flex items-center pt-2">
                {imagesPreview.map((image, index) => (
                    <Image
                        width={70}
                        height={70}
                        key={index}
                        src={image}
                        alt="images Preview"
                    />
                ))}
            </div>

            <div className="flex justify-center items-center">
                {isLoading ? (
                    <div className="loader flex justify-center mt-2">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="dark_primary_bg rounded-md text-white px-4 py-2 mt-3"
                    >
                        GET YOUR BEST DEAL
                    </button>
                )}
            </div>


        </form>
    );
};
export default MainForm;
