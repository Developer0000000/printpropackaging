import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import payoneer from '@/assets/payoneer.jpg'

const Footer = () => {
    return (
        <>
            <footer className="text-white relative dark_primary_bg body-font px-4 md:px-[var(--paddingX)]">
                <div className="custom-shape-divider-top-1729016048">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="container pb-14 pt-32 mx-auto">
                    <div className="flex justify-between items-start flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">Contact</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li className="text-white hover_text__golden">
                                    <i className="ri-earth-fill pr-1.5 text-2xl text__golden"></i>
                                    1942 Broadway St. STE 314C Boulder, CO, 80302, USA
                                </li>
                                <li className="text-white hover_text__golden">
                                    <i className="ri-phone-fill pr-1.5 text-2xl text__golden"></i>
                                    +1 720-604-9062
                                </li>
                                <li className='hover_text__golden'>
                                    <i className="ri-send-plane-fill pr-1.5 text-2xl text__golden"></i>
                                    <a href="mailto:sales@printpropackaging.com">sales@printpropackaging.com</a>
                                </li>
                            </nav>
                        </div>
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">Useful Links</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <Link href='/about' className="text-white hover_text__golden">About</Link>
                                </li>
                                <li>
                                    <Link href='/contact' className="text-white hover_text__golden">Contact</Link>
                                </li>
                                <li>
                                    <Link href='/faq' className="text-white hover_text__golden">Faqs</Link>
                                </li>
                                <li>
                                    <Link href='/blogs' className="text-white hover_text__golden">Blogs</Link>
                                </li>
                                <li>
                                    <Link href='/privacy_policy' className="text-white hover_text__golden">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href='/terms_conditions' className="text-white hover_text__golden">Terms & Conditions</Link>
                                </li>
                            </nav>
                        </div>
                        <div className='w-full md:w-auto'>
                            <h2 className="title-font font-medium text-lg mb-6 text__golden underline underline-offset-4">CATEGORIES</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <Link href='/products/cbd-boxes' className="text-white hover_text__golden">CBD Boxes</Link>
                                </li>
                                <li>
                                    <Link href='/products/retail-boxes' className="text-white hover_text__golden">Retail Boxes</Link>
                                </li>
                                <li>
                                    <Link href='/products/custom-kraft-boxes' className="text-white hover_text__golden">Custom kraft Boxes</Link>
                                </li>
                                <li>
                                    <Link href='/products/custom-cosmetic-boxes' className="text-white hover_text__golden">Custom Cosmetic Boxes</Link>
                                </li>
                                <li>
                                    <Link href='/products/custom-food-and-beverage-boxes' className="text-white hover_text__golden">Custom Food and Beverage Boxes</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="container py-3 flex md:justify-between justify-center flex-wrap mx-auto gap-6 items-center">
                        <div className='flex items-center gap-10'>
                            <p className="font-medium text-lg text__golden underline underline-offset-8">Follow Us</p>
                            <div className='flex gap-4 social_icons'>
                                <a href="https://www.facebook.com/PrintProPackagingUSA">
                                    <i className="text-2xl ri-facebook-circle-fill"></i>
                                </a>
                                <i className="text-2xl ri-twitter-x-fill"></i>
                                <i className="text-2xl ri-instagram-line"></i>
                                <i className="text-2xl ri-linkedin-box-fill"></i>
                            </div>
                        </div>
                        <div className="payment_link flex justify-center flex-wrap items-center gap-5">
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/visa.svg" alt="Visa Card" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/mastercard.svg" alt="Master Card" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/paypal.svg" alt="PayPal Payment" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/amex.svg" alt="American Express Payment" />
                            <Image width={50} height={50} className='size-10' src="https://blackbirdpackaging.com/assets/images/stripe.svg" alt="Stripe Payment" />
                            <Image width={50} height={50} src={payoneer} alt="Payoneer Payment" />
                        </div>
                    </div>
                </div>
                <div className="text-white text-center py-4 text-sm border-t">
                    © {new Date().getFullYear()} All Right Reserved! and Made with 💙 by <a href="https://developortayyab.web.app/" className="text-white ml-1 underline" target="_blank" rel="noopener noreferrer">Tayyab</a>
                </div>
            </footer>
        </>
    )
}

export default Footer