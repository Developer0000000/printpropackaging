'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const SearchModal = ({ isOpen, onClose }) => {
    // Move useState outside of the conditional rendering
    const [search, setSearch] = useState('');

    // Return null if the modal is not open
    if (!isOpen) return null;

    const items = [
        { title: 'CBD Bath Bombs Boxes', url: 'cbd-bath-bombs-boxes' },
        { title: 'Custom Printed Archive Boxes', url: 'custom-printed-archive-boxes' },
        { title: 'Custom Printed Mailer Boxes', url: 'custom-printed-mailer-boxes' },
        { title: 'Custom Printed Cream Boxes', url: 'custom-printed-cream-boxes' },
        { title: 'Pet Food Boxes', url: 'pet-food-boxes' },
        { title: 'Custom Display Boxes', url: 'custom-display-boxes' },
        { title: 'CBD Cookies Boxes', url: 'cbd-cookies-boxes' },
        { title: 'CBD Cream Boxes', url: 'cbd-cream-boxes' },
        { title: 'CBD Display Boxes', url: 'cbd-display-boxes' },
        { title: 'CBD Hemp Oil Boxes', url: 'cbd-hemp-oil-boxes' },
        { title: 'CBD Sleeve & Tray Boxes', url: 'cbd-sleeve-tray-boxes' },
        { title: 'CBD Soap Boxes', url: 'cbd-soap-boxes' },
        { title: 'CBD Tincture Boxes', url: 'cbd-tincture-boxes' },
        { title: 'Kraft Gable Boxes', url: 'kraft-gable-boxes' },
        { title: 'Kraft Card Boxes', url: 'kraft-card-boxes' },
        { title: 'Candle Boxes', url: 'candle-boxes' },
        { title: 'Magnetic Gift Boxes', url: 'magnetic-gift-boxes' },
        { title: 'Foldable Rigid Boxes', url: 'foldable-rigid-boxes' },
        { title: 'Corrugated Mailer Boxes', url: 'corrugated-mailer-boxes' },
        { title: 'Bux Board Boxes', url: 'bux-board-boxes' },
        { title: 'Custom Printed Cardboard Boxes', url: 'custom-printed-cardboard-boxes' },
        { title: 'Kraft Apparel Boxes', url: 'kraft-apparel-boxes' },
        { title: 'Kraft Window Boxes', url: 'kraft-window-boxes' },
        { title: 'Custom Printed Kraft Boxes', url: 'custom-printed-kraft-boxes' },
        { title: 'Pillow Boxes', url: 'pillow-boxes' },
        { title: 'Pyramid Boxes', url: 'pyramid-boxes' },
        { title: 'Sleeve Boxes', url: 'sleeve-boxes' },
        { title: 'Seal End Boxes', url: 'seal-end-boxes' },
        { title: 'Tissue Boxes', url: 'tissue-boxes' },
        { title: 'Customize Medicine Boxes', url: 'customize-medicine-boxes' },
        { title: 'Custom Candy Boxes', url: 'custom-candy-boxes' },
        { title: 'Die Cut Retail Boxes', url: 'die-cut-retail-boxes' },
        { title: 'Electronic Retail Boxes', url: 'electronic-retail-boxes' },
        { title: 'Hang Tab Retail Boxes', url: 'hang-tab-retail-boxes' },
        { title: 'Toy Retail Boxes', url: 'toy-retail-boxes' },
        { title: 'Cigarette Boxes', url: 'cigarette-boxes' },
        { title: 'Cigar Boxes', url: 'cigar-boxes' },
        { title: 'Kraft Paper Bags', url: 'kraft-paper-bags' },
        { title: 'Art Paper Bags', url: 'art-paper-bags' },
        { title: 'Two Piece Boxes', url: 'two-piece-boxes' },
        { title: 'Cake Boxes', url: 'cake-boxes' },
        { title: 'Cereal Boxes', url: 'cereal-boxes' },
        { title: 'Chocolate Boxes', url: 'chocolate-boxes' },
        { title: 'Tea Boxes', url: 'tea-boxes' },
        { title: 'Vape Window Boxes', url: 'vape-window-boxes' },
        { title: 'Vape Juice Boxes', url: 'vape-juice-boxes' },
        { title: 'Vape Kit', url: 'vape-kit' },
        { title: 'Vape Hanging Boxes', url: 'vape-hanging-boxes' },
        { title: 'Cookies Boxes', url: 'cookies-boxes' },
        { title: 'Pizza Boxes', url: 'pizza-boxes' },
        { title: 'Table Tents', url: 'table-tents' },
        { title: 'Labels and Stickers', url: 'labels-and-stickers' },
        { title: 'Bottle Neckers', url: 'bottle-neckers' },
        { title: 'Lip Gloss Boxes', url: 'lip-gloss-boxes' },
        { title: 'Lotion Boxes', url: 'lotion-boxes' },
        { title: 'Hair Serum Boxes', url: 'hair-serum-boxes' },
        { title: 'Beard Oil Boxes', url: 'beard-oil-boxes' },
        { title: 'Lipstick Boxes', url: 'lipstick-boxes' },
        { title: 'Eyelash Boxes', url: 'eyelash-boxes' },
        { title: 'Nail Polish Boxes', url: 'nail-polish-boxes' },
        { title: 'Makeup Boxes', url: 'makeup-boxes' },
        { title: 'Cream Boxes', url: 'cream-boxes' },
        { title: 'Mascara Boxes', url: 'mascara-boxes' },
        { title: 'Perfume Boxes', url: 'perfume-boxes' },
        { title: 'Eyeshadow Boxes', url: 'eyeshadow-boxes' },
        { title: 'Foundation Boxes', url: 'foundation-boxes' },
        { title: 'Hair Extension Boxes', url: 'hair-extension-boxes' },
        { title: 'Hair Spray Boxes', url: 'hair-spray-boxes' },
        { title: 'Lip Balm Boxes', url: 'lip-balm-boxes' },
        { title: 'Display Boxes', url: 'display-boxes' }
    ];

    // Filter items based on search term
    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[999999999999999]">
            <div className="bg-white w-full max-w-3xl max-h-[80vh] overflow-y-auto mx-auto rounded shadow-lg px-8 py-6 translate-y-10 relative z-50">
                <div className="flex justify-between items-center mb-4 border-b-2 pb-1.5">
                    <h2 className="text-xl font-semibold">Search your box</h2>
                    <button onClick={onClose} className="text-gray-900 text-2xl">
                        <i className="ri-close-line"></i>
                    </button>
                </div>

                <form className="flex pt-3">
                    <input
                        type="search"
                        placeholder="I'm looking for ..."
                        className="flex-grow p-2 border border-gray-300 rounded focus:outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>

                {/* Display filtered items based on search */}
                {search && (
                    <ul className="mt-4">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <li onClick={onClose} key={index} className="list-none mb-2 bg-slate-200 rounded p-2">
                                    <Link href={`/product/${item?.url}`}>{item.title}</Link>
                                </li>
                            ))
                        ) : (
                            <li className="list-none">No items found</li>
                        )}
                    </ul>
                )}
            </div>

            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        </div>
    );
};

export default SearchModal;




