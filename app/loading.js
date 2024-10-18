'use client'
import Image from 'next/image'
import React from 'react'


const loading = () => {
    return (
        <div className='flex justify-center -translate-y-20 items-center h-screen'>
            <Image width={200} height={200} className='md:w-[40vw] w-[90vw] animate-bounce' src='https://printpropackaging.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.403e9baf.png&w=828&q=75' alt="Logo" />
        </div>
    )
}

export default loading