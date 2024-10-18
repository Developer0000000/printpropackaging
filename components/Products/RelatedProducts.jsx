import React from 'react';
import { client } from '@/sanity/lib/client';
import ProductsCard from './ProductsCard';

const RelatedProducts = async ({ title, category }) => {

    const query = `*[_type == "product" && category == "${category}"] | order(_createdAt asc) {
        title, 
        "slug": slug.current,
        category, 
        images[]{asset->{url}},
    }`;

    const products = await client.fetch(query);
    return (
        <>
            {products.length > 1 &&
                <div className='mt-20'>
                    <h1 className="text-center text-3xl font-bold">Related Products</h1>
                    <div className='flex md:justify-start justify-center flex-wrap my-8 gap-5'>
                        {products.filter((item) => item.title !== title).map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            }
        </>
    );
}

export default RelatedProducts;
