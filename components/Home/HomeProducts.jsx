'use client'
import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProductsCard from '../Products/productsCard';
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

const HomeProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const query = `*[_type == "product"] | order(_createdAt asc) {
                title, 
                "slug": slug.current,
                category, 
                images[]{asset->{url}}, 
            }`;

            const result = await client.fetch(query);
            setProducts(result);
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Tabs className='px-4 md:px-20 pb-20 pt-10 homeProducts'>
                <TabList className='flex items-center justify-center gap-4 flex-wrap '>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>CBD Boxes</button></Tab>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>Retail Boxes</button></Tab>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>Custom Eco Friendly Boxes</button></Tab>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>Custom Cosmetic Boxes</button></Tab>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>Custom Food & Beverage Boxes</button></Tab>
                    <Tab><button className='rounded-md border border-black px-4 py-2 uppercase'>Custom Display Packaging</button></Tab>
                </TabList>

                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'cbd boxes').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'retail boxes').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'custom eco friendly boxes').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'custom cosmetic boxes').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'custom food & beverage boxes').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='flex items-center md:justify-start justify-center flex-wrap my-8 gap-10'>
                        { products.filter(product => product.category === 'custom display packaging').map((product, index) => (
                            <ProductsCard key={index} {...product} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </>
    );
}

export default HomeProducts;
