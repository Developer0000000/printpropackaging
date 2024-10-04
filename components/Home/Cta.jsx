// "use client"
import { CtaCards } from '@/config/CtaCards'
import React from 'react'

const Cta = () => {
    return (
        <>
            <div className='w-full md:px-[var(--paddingX)] px-4 pt-5 pb-3 border-b border-black'>
                <div className="flex sm:flex-nowrap flex-wrap sm:justify-between justify-center items-center gap-2">
                    {
                        CtaCards.map((item, index) => (
                            <div key={index} className="w-auto">
                                <div className='flex items-center gap-2'>
                                    <span className='text-3xl'>{item.icon}</span>
                                    <h5 className="mb-2 text-xs font-semibold tracking-tight text-gray-900 text-wrap">{item.title}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Cta