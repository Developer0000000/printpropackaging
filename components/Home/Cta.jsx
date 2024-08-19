// "use client"
import { CtaCards } from '@/config/CtaCards'
import React from 'react'

const Cta = () => {
    return (
        <>
            <div className='flex items-center justify-between flex-wrap md:p-20 px-4 py-20 gap-y-5'>
                {
                    CtaCards.map((item, index) => (
                        <div key={index} className="md:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                                <div className='text-5xl'>
                                    {item.icon}
                                </div>
                                <div className='text-center'>
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                                    <p className="mb-3 font-normal text-gray-500 ">{item.description}</p>
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