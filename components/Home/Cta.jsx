// "use client"
import { CtaCards } from '@/config/CtaCards'
import React from 'react'

const Cta = () => {
    return (
        <>
            <div className='grid place-items-center grid-cols-12 md:px-[var(--paddingX)] px-4 py-20 gap-5'>
                {
                    CtaCards.map((item, index) => (
                        <div key={index} className="max-w-sm col-span-12 sm:col-span-6 md:col-span-4 p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                                <div className='text-5xl'>
                                    {item.icon}
                                </div>
                                <div className='text-center'>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                                    <p className="mb-3 font-normal text-gray-500 text-sm">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cta