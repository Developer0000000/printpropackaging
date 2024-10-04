import React from 'react';
import ProductsCard from '@/components/Products/ProductsCard';
import PageTitle from '@/components/Global/pageTitle';
import { client } from '@/sanity/lib/client';

// This is a server component
const Products = async ({ params }) => {
    const { slug } = params;
    // Sanity query to fetch products by category slug
    const query = `*[_type == "product" && category == "${slug}"] | order(_createdAt asc) {
        title, 
        "slug": slug.current,
        category, 
        images[]{asset->{url}},
    }`;

    const products = await client.fetch(query);

    return (
        <>
            <PageTitle currentPage={"Products"} currentPageTitle={slug} prevPage="Home" />
            <div className='px-4 md:px-[var(--paddingX)] py-20 homeProducts'>
                <h1 className='text-3xl text-center mb-5 font-bold'>{slug.toUpperCase()}</h1>
                <div className='flex md:justify-start justify-centern flex-wrap my-8 gap-5'>
                    {products.map((product, index) => (
                        <ProductsCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </>

    );
}

export default Products;
