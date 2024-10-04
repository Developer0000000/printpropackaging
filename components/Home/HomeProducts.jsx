import React from 'react'
import { CategoryProducts } from '../../config/CategoryProducts';
import Link from 'next/link';
import Image from 'next/image';


const HomeProducts = () => {

    return (  
        <>
            <div className='px-4 md:px-[var(--paddingX)] pb-20 pt-10 homeProducts'>
                <div className='flex md:justify-start justify-center flex-wrap my-8 gap-5'>
                    {CategoryProducts.map((product, index) => (
                        <Link key={index} href={`/products/${product.slug.toLowerCase()}`}>
                            <div className="bg-white relative w-64 h-full rounded-lg p-1.5 shadow-md">
                                <Image width={500} height={500} alt='image' className='rounded-lg h-fit object-cover w-full' src={product.titleImg} />
                                <div className="mt-1 py-2 text-center">
                                    <p className="title-font font-medium capitalize">{product.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomeProducts;
