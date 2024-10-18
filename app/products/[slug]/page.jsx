import React from 'react';
import ProductsCard from '@/components/Products/ProductsCard';
import PageTitle from '@/components/Global/pageTitle';
import { client } from '@/sanity/lib/client';
import CategoryDetails from '@/components/Products/CategoryDetails';

export const revalidate = 60;

export const generateStaticParams = async () => {
    const query = `*[_type == "category"]{"slug":slug.current}`;
    const slugs = await client.fetch(query);
    const slugsRoutes = slugs.map((slug) => (slug.slug));
    return slugsRoutes.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
    const slug = params.slug;
    return {
        title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} - Products`, // Capitalizes the first letter
        description: `Browse products for ${slug}`,
    };
}

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
            {/* Page title and breadcrumb */}
            <PageTitle currentPage={"Products"} currentPageTitle={slug} prevPage="Home" />

            <div className='md:px-[var(--paddingX)] py-20 homeProducts'>
                <div>
                    <CategoryDetails slug={slug} />
                </div>
                <div className='flex justify-center flex-wrap my-8 gap-5'>
                    {products.map((product, index) => (
                        <ProductsCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
