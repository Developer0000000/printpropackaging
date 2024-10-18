'use client'
import React from 'react'
import whatsapp from '@/assets/whatsapp.png';
import Image from 'next/image';

const Whatsapp = () => {
    return (
        <div className="whatsapp fixed bottom-5 left-5 z-[999999999999]">
            <a href="https://wa.me/17206049062" target="_blank">
                <Image src={whatsapp} alt="whatsapp" width={50} height={50} />
            </a>
        </div>
    )
}

export default Whatsapp