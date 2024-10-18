import Link from 'next/link'
import React from 'react'

export default function PageTitle({ currentPageTitle, currentPage, prevPage }) {
    return (
        <>
            <div className={`md:px-24 px-4 py-4 bg-gray-100 flex flex-col md:flex-row items-center justify-center md:justify-between capitalize`}>
                <div className='text-xl font-bold text-center md:text-left pb-4 md:pb-0'>
                    <p>{currentPageTitle}</p>
                </div>
                <div className='capitalize'>
                    <Link href={prevPage === "Home" ? "/" : `/${prevPage}`}> <span> {prevPage} </span> </Link>
                    <span className='secondary_text'>/ {currentPage}</span>
                </div>
            </div>
        </>
    )
}
