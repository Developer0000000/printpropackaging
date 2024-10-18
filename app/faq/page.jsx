import Accordions from '@/components/Global/Accordions'
import React from 'react'


const Faq = () => {
    return (
        <>
            <section className='md:px-[var(--paddingX)] md:py-20 px-4 pt-10 pb-20'>
                <div className='h-full w-full relative'>
                    <Accordions />
                </div>
            </section>
        </>
    )
}

export default Faq