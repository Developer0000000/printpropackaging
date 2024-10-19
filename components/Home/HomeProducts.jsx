import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProductsCard from '../Products/ProductsCard';


const HomeProducts = async () => {

    const query = `*[_type == "category" && slug.current in ["cbd-boxes", "cosmetic-boxes", "cardboard-boxes", "food-and-beverage-boxes"]] | order(_createdAt asc) {
        title,
        "slug": slug.current,
        description,
        image{asset->{url}},
      }`;

    const products = await client.fetch(query);

    const query2 = `*[_type == "product" && slug.current in ["pillow-boxes", "cbd-soap-boxes", "magnetic-gift-boxes","foldable-rigid-boxes", "magnetic-gift-boxes", "pyramid-boxes", "custom-printed-mailer-boxes", "customize-medicine-boxes", "pet-food-boxes"]] | order(_createdAt asc) {
        title, 
        "slug": slug.current,
        images[]{asset->{url}},
      }`;

    const products2 = await client.fetch(query2);

    return (
        <>
            <div className='px-4 md:px-[var(--paddingX)] pb-20 pt-10 homeProducts'>
                <div className='flex justify-center flex-wrap my-8 gap-5'>
                    {products.map((product, index) => (
                        <Link key={index} href={`/products/${product.slug.toLowerCase()}`}>
                            <div className="bg-white relative w-64 h-full rounded-lg p-1.5 shadow-md">
                                <Image width={500} height={500} alt='image' className='rounded-lg h-fit object-cover w-full' src={urlFor(product.image).url()} />
                                <div className="mt-1 py-2 text-center">
                                    <p className="title-font font-medium capitalize">{product.title}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                    {products2.map((product, index) => (
                        <ProductsCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomeProducts;
