import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="text-white bg-black body-font px-4 md:px-[var(--paddingX)]">
                <div className="container py-14 mx-auto">
                    <div className="flex justify-between items-start flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">Contact</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li className="text-white hover_text__golden">
                                    <i className="ri-earth-fill pr-1.5 text-2xl text__golden"></i>
                                    425 W Capitol Ave Suite 1226, Little Rock, AR 72201
                                </li>
                                <li className="text-white hover_text__golden">
                                    <i className="ri-phone-fill pr-1.5 text-2xl text__golden"></i>
                                    +(501) 667-8000
                                </li>
                                <li className='hover_text__golden'>
                                    <i className="ri-send-plane-fill pr-1.5 text-2xl text__golden"></i>
                                    <a href="mailto:sales@printpropackaging">sales@printpropackaging</a>
                                </li>
                            </nav>
                        </div>
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">Useful Links</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <Link href='/about' className="text-white hover_text__golden">About Us</Link>
                                </li>
                                <li>
                                    <Link href='/blogs' className="text-white hover_text__golden">Blog & Articles</Link>
                                </li>
                                <li>
                                    <Link href='/privacy_policy' className="text-white hover_text__golden">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href='/terms_conditions' className="text-white hover_text__golden">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href='/contact' className="text-white hover_text__golden">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">CBD Boxes</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <Link href='' className="text-white hover_text__golden">CBD Bath Bombs Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">CBD Oil Packaging</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">CBD Soap Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom Printed Hemp Oil Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">CBD Tincture Boxes</Link>
                                </li>
                            </nav>
                        </div>
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">Food & Beverages Boxes</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom  Bakery Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom  Cake Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom  Cereal Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom  Chocolate Boxes</Link>
                                </li>
                                <li>
                                    <Link href='' className="text-white hover_text__golden">Custom  Tea Boxes</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="container py-3 flex justify-between flex-wrap mx-auto gap-6 items-center">
                        <div className='flex items-center gap-10'>
                            <p className="font-medium text-lg text__golden underline underline-offset-8">Follow Us</p>
                            <div className='flex gap-4 social_icons'>
                                <i className="text-2xl ri-facebook-circle-fill"></i>
                                <i className="text-2xl ri-twitter-x-fill"></i>
                                <i className="text-2xl ri-instagram-line"></i>
                                <i className="text-2xl ri-linkedin-box-fill"></i>
                            </div>
                        </div>
                        <div className="payment_link flex items-center gap-5">
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/visa.svg" alt="Visa Card" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/mastercard.svg" alt="Master Card" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/paypal.svg" alt="PayPal Payment" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/amex.svg" alt="American Express Payment" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/stripe.svg" alt="Stripe Payment" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/bank.svg" alt="Wire Transfer Bank Payment" />
                        </div>
                    </div>
                </div>
                <div className="text-gray-500 text-center py-6 text-sm border-t">
                    © {new Date().getFullYear()} All Right Reserved! and Made with 💙 by <a href="https://developortayyab.web.app/" className="text-white ml-1 underline" target="_blank" rel="noopener noreferrer">Tayyab</a>
                </div>
            </footer>
        </>
    )
}

export default Footer