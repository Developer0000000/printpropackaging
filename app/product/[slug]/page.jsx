import React from 'react';
import MainForm from '@/components/Global/form/MainForm';
import PageTitle from '@/components/Global/pageTitle';
import ProductContent from '@/components/Products/ProductContent';
import ProductQuality from '@/components/Products/ProductQuality';
import ProductSwiper from '@/components/Products/ProductSwiper';
import { client } from '@/sanity/lib/client';
import RelatedProducts from '@/components/Products/RelatedProducts';

export const revalidate = 60;

export const generateStaticParams = async () => {
    const query = `*[_type == "product"]{"slug":slug.current}`;
    const slugs = await client.fetch(query);
    const slugsRoutes = slugs.map((slug) => (slug.slug));
    return slugsRoutes.map(slug => ({ slug }))
}

export default async function Product({ params }) {

    const query = `*[_type == "product" && slug.current == "${params.slug}" ]{title,description,images,content,category}[0]`;
    const productData = await client.fetch(query);

    return (
        <>
            <PageTitle currentPage={"Product"} currentPageTitle={productData.title} prevPage="Home" />
            <section className='md:px-[var(--paddingX)] md:py-20 px-4 pt-10 pb-20'>

                <div className="flex justify-around flex-wrap md:gap-0 gap-5">
                    <ProductQuality icon={<i className="ri-wallet-3-fill"></i>} title="Competitive Pricing" />
                    <ProductQuality icon={<i className="ri-checkbox-line"></i>} title="High Quality Offset Printing" />
                    <ProductQuality icon={<i className="ri-archive-fill"></i>} title="Free Die and Plates" />
                    <ProductQuality icon={<i className="ri-shield-flash-fill"></i>} title="Proper Quality Assured" />
                </div>
                <div className="text-gray-600 body-font">
                    <div className="flex pt-12 md:flex-row flex-col items-start gap-6 text-sm">
                        <div className='w-full md:w-[40%]'>
                            <ProductSwiper images={productData.images} />
                            {
                                productData.description && <div>
                                    <p className='leading-[1.8] my-4'>{productData.description}</p>
                                </div>
                            }
                        </div>
                        <div className='w-full md:w-[60%]'>
                            <div className="form_bg p-8 rounded-lg shadow-lg w-full max-w-2xl relative z-50 overflow-auto h-full md:h-auto">
                                <div className="mb-4 p-2 bg-[#2e4057] ">
                                    <h2 className="font-semibold text-white text-center">PRICE ON REQUEST</h2>
                                </div>
                                <MainForm slug={params.slug} title={productData.title} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-full w-full relative'>
                    <ProductContent content={productData.content} />
                </div>

                <div className='h-full w-full relative'>
                    <RelatedProducts title={productData.title} category={productData.category} />
                </div>

            </section>
        </>
    )
}