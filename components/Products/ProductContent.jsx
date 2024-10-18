'use client'
import { PortableText } from 'next-sanity';
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styleComponent from './CustomProductStyle';
import Specifications from './Specifications';

const ProductContent = ({ content }) => {
    return (
        <>
            <Tabs className='pt-10 pb-20 product'>

                <TabList className='flex flex-wrap justify-center sm:justify-start items-center gap-2 translate-y-6 relative z-50'>
                    <Tab><button className='rounded-md px-8 font-bold py-2 bg-[#E5E5E5] text-gray-900'>Specifications</button></Tab>
                    <Tab><button className='rounded-md px-8 font-bold py-2 bg-[#E5E5E5] text-gray-900'>Description</button></Tab>
                </TabList>

                <TabPanel>
                    <section className='h-full w-full relative bg-[#F1F1F1] px-3 lg:px-12 py-20'>
                        <Specifications />
                    </section>
                </TabPanel>
                <TabPanel>
                    <section className='h-full w-full relative bg-[#F1F1F1] sm:px-12 sm:py-20 py-16 px-6'>
                        <PortableText
                            value={content}
                            components={styleComponent}
                        />
                    </section>
                </TabPanel>

            </Tabs>
        </>
    );
}

export default ProductContent;