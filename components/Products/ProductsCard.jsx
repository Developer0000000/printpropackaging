import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductsCard({ slug, title, images }) {
    
    const imageUrl = urlFor(images[0]).url();
    // console.log(imageUrl)
    return (
        <>
            <Link href={`/product/${slug}`}>
                <div className="relative w-64 h-full rounded-lg p-1.5 shadow-md bg-white">
                    <Image width={500} height={500} alt='image' className='rounded-lg h-fit object-cover w-full' src={imageUrl} />
                    <div className="mt-1 py-2 text-center">
                        <p className="title-font font-medium capitalize bg-white">{title}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
