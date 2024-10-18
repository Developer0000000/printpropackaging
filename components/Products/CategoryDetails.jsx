import React from 'react'
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import InstantForm from '../Global/form/InstantForm';

const CategoryDetails = async ({ slug }) => {

    const query = `*[_type == "category" && slug.current == "${slug}"] | order(_createdAt asc) {
        title, 
        description,
        image{asset->{url}},
    }[0]`;

    const product = await client.fetch(query);

    return (
        <div className="min-h-screen flex items-center justify-center pb-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 px-4">
               
                <div className="md:w-1/2 space-y-3">
                    <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
                    <p className="text-lg text-gray-600">{product.description}</p>
                    <div className="w-full md:h-[70vh] h-full">
                        <Image src={urlFor(product.image).url()} alt={product.title} width={200} height={100} className="w-full h-full object-fill" />
                    </div>
                </div>

                <InstantForm />

            </div>
        </div>
    );

}

export default CategoryDetails