import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductsCard({ slug, title, images }) {
    
    const imageUrl = urlFor(images[0]).url();

    return (
        <>
            <Link href={`/product/${slug}`}>
                <div className="relative w-64 rounded-lg border p-3">
                    <Image width={500} height={500} alt='image' className='rounded-lg h-48 object-cover w-full' src={imageUrl} />
                    <div className="mt-1 py-2 text-center">
                        <p className="title-font text-lg font-medium capitalize">{title}</p>
                        <p className="font-semibold underline underline-offset-4">Get Your Price</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
