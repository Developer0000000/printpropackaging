'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import NavMenu2 from './NavMenu2';
import Button from './Button';
import Image from 'next/image';
// import SearchModal from './SearchModal'; // Make sure this component exists

export default function Component() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    return (
        <div className="w-full">

            <div className="flex items-center justify-between p-4 border-b px-4 md:px-20">
                <Link href='/' className="flex items-center space-x-4">
                    <Image width={50} height={50} src="/placeholder.svg" alt="Logo" className="h-12" />
                    <div>
                        <h1 className="text-xl font-bold uppercase">PrintPro</h1>
                        <p className="text-sm">PACKAGING</p>
                    </div>
                </Link>
                <i onClick={toggleSidebar} className="ri-menu-5-line text-4xl cursor-pointer md:hidden block"></i>
                <div className="items-center space-x-2 hidden md:flex">
                    <PhoneIcon className="text-black" />
                    <div>
                        <p className="text-sm">9:30am - 6:30pm EST</p>
                        <p className="text-orange-500 font-bold">+1 501-553-4722</p>
                    </div>
                </div>
                <div className="items-center space-x-4 hidden md:flex mail__btn">
                    <Button text="Get Free Quote" icon={<i className="ri-file-text-line mr-1"></i>} />
                    {/* <i onClick={openSearch} className="ri-search-line text-3xl cursor-pointer"></i> */}
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 z-50 bg-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex items-center justify-between p-4 border-b">
                    <Link href='/' className="flex items-center space-x-4">
                    <Image width={50} height={50} src="/placeholder.svg" alt="Logo" className="h-12" />
                        <div>
                            <h1 className="text-xl font-bold uppercase">PrintPro</h1>
                            <p className="text-sm">PACKAGING</p>
                        </div>
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-900 text-2xl">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                    <NavMenu setSidebarOpen={setSidebarOpen} menuName="RETAIL BOXES" menuLists={'Printed Archive Boxes'} menuLink={'https://printpropackaging.vercel.app/product/custom-printed-archive-boxes'} />
                    <NavMenu setSidebarOpen={setSidebarOpen} menuName="CUSTOM CBD BOXES" menuLists={'Bath Bombs Boxes'} menuLink={'https://printpropackaging.vercel.app/product/cbd-bath-bombs-boxes'} />
                    <NavMenu setSidebarOpen={setSidebarOpen} menuName="BOX BY INDUSTRIES" menuLists={'Printed Mailer Boxes'} menuLink={'https://printpropackaging.vercel.app/product/custom-printed-mailer-boxes'} />

                    <Link onClick={() => setSidebarOpen(false)} href="/about" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        ABOUT US
                    </Link>
                    <Link onClick={() => setSidebarOpen(false)} href="/blogs" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        BLOGS
                    </Link>
                    <Link onClick={() => setSidebarOpen(false)} href="/contact" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        CONTACT
                    </Link>
                </div>
                <div className="items-center ml-4 flex pl-2 pt-3 ">
                    <Button />
                </div>
            </div>

            {/* Top Navigation Links */}
            <div className="hidden md:flex justify-center items-center space-x-8 py-4 bg-white border-b px-4 md:px-20">
                <NavMenu menuName="RETAIL BOXES" menuLists={'Printed Archive Boxes'} menuLink={'http://localhost:3000/product/custom-printed-archive-boxes'} />
                <NavMenu menuName="CUSTOM CBD BOXES" menuLists={'Bath Bombs Boxes'} menuLink={'http://localhost:3000/product/cbd-bath-bombs-boxes'} />
                <NavMenu menuName="BOX BY INDUSTRIES" menuLists={'Printed Mailer Boxes'} menuLink={'http://localhost:3000/product/custom-printed-mailer-boxes'} />

                {/* <NavMenu2 /> */}

                <Link href="/about" className="text-sm text-gray-800 font-semibold" prefetch={false}>
                    ABOUT US
                </Link>
                <Link href="/blogs" className="text-sm text-gray-800 font-semibold" prefetch={false}>
                    BLOGS
                </Link>
                <Link href="/contact" className="text-sm text-gray-800 font-semibold" prefetch={false}>
                    CONTACT
                </Link>
            </div>

            {/* <SearchModal isOpen={isSearchOpen} onClose={closeSearch} /> */}
        </div>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
