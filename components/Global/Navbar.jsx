'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import NavMenu2 from './NavMenu2';
import Button from './Button';
import Image from 'next/image';
import Logo from '../../assets/Logo.png';
// import SearchModal from './SearchModal'; // Make sure this component exists

export default function Component() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [activeLink, setActiveLink] = useState('/');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const onUpdateActiveLink = (event) => {
        setActiveLink(event);
    };

    return (
        <div className="w-full">

            {/* Top Navigation Links */}
            <div className="hidden md:flex justify-between items-center space-x-8 py-4 bg-white border-b px-4 md:px-[var(--paddingX)]">

                <div className="flex items-center">
                    <div className="items-center space-x-1 flex border-r-4 pr-2 border-black">
                        <PhoneIcon className="text-black" />
                        <p className="secondary_text font-bold">+1 719-204-4173</p>
                    </div>
                    <div className="items-center space-x-1 flex pl-2">
                        <i className="ri-send-plane-fill text-xl"></i>
                        <a href="mailto:sales@printpropackaging.com">sales@printpropackaging.com</a>
                    </div>
                </div>

                <div className='flex items-center space-x-6'>

                    <NavMenu />


                    <Link onClick={() => onUpdateActiveLink('/contact')} href="/contact" className={` ${activeLink === '/contact' ? "border-b-2 border-black rounded underline underline-offset-4" : "text-gray-800"} text-sm font-semibold`} prefetch={false}>
                        CONTACT
                    </Link>
                </div>

            </div>

            <div className="flex sm:hidden items-center justify-center flex-wrap border-b border-black pt-4 pb-3">
                <div className="items-center space-x-1 flex">
                    <PhoneIcon className="text-black" />
                    <p className="secondary_text font-bold">+1 719-204-4173</p>
                </div>
                <div className="items-center space-x-1 flex pl-2">
                    <i className="ri-send-plane-fill text-xl"></i>
                    <a href="mailto:sales@printpropackaging.com">sales@printpropackaging.com</a>
                </div>
            </div>
            <div className="flex relative items-center justify-between p-4 border-b bg-transparent px-4 md:px-[var(--paddingX)]">
                <Link onClick={() => onUpdateActiveLink('/')} href='/'>
                    <div className="absolute top-1/2 -translate-y-1/2 sm:-left-14 -left-20">
                        <Image width={400} height={100} src={Logo} alt="Logo" className="h-12 object-cover" />
                    </div>
                </Link>
                <i onClick={toggleSidebar} className="ri-menu-5-line text-4xl cursor-pointer md:hidden block"></i>
                <div className="items-center space-x-4 hidden md:flex mail__btn">
                    <Button text="Get Free Quote" icon={<i className="ri-file-text-line mr-1"></i>} />
                    {/* <i onClick={openSearch} className="ri-search-line text-3xl cursor-pointer"></i> */}
                </div>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-0 z-50 bg-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex items-center justify-between p-4 border-b relative">
                    <Link href='/'>
                        <div className="absolute top-1/2 -translate-y-1/2 -left-20">
                            <Image width={400} height={100} src={Logo} alt="Logo" className="h-12 object-cover" />
                        </div>
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-900 text-4xl">
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">

                    <Link onClick={() => setSidebarOpen(false)} href="/" className="text-sm text-gray-800 font-semibold pl-2 pt-3" prefetch={false}>
                        HOME
                    </Link>

                    <NavMenu />

                    <Link onClick={() => setSidebarOpen(false)} href="/about" className="text-sm text-gray-800 font-semibold pl-2" prefetch={false}>
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
                    <Button text="Get Free Quote" icon={<i className="ri-file-text-line mr-1"></i>} />
                </div>
            </div>

        </div>
    );
}

function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
