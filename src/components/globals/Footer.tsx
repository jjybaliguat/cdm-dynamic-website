import Link from 'next/link'
import React from 'react'
import Contact from '../ui/Contact'
import Image from 'next/image'
import CustomLink from '../ui/CustomLink'

function Footer() {
  return (
    <footer className='overflow-hidden bg-black/90 text-white' >
        <div className='container section-gap-top'>
            <div className="grid-cols-12 justify-between gap-6 md:grid">
                <div className='gap-32px col-start-1 col-end-6 flex flex-col xxl:col-end-6'>
                    <h3 className='d4 font-semibold'>
                        <span className='text-primary'>Let&apos;s </span>
                        Achieve Together
                    </h3>
                    <p className='lText'>Welcome to our diverse and dynamic course catalog.</p>
                </div>
                <div className='col-start-8 col-end-13 flex flex-col gap-3 md:gap-32px max-md:mt-5 xl:col-start-9 xxl:col-start-11'>
                    <h3 className='h3 font-semibold text-white'>Follow us</h3>
                    <div className='flex items-center gap-x-4'>
                        <Link
                            className='group theme-transition-3 rounded-full border border-primary p-3 text-primary hover:bg-primary hover:text-neutral-700'
                            href="/"

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook group-hover:text-white">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </Link>
                        <Link
                            className='group theme-transition-3 rounded-full border border-primary p-3 text-primary hover:bg-primary hover:text-neutral-700'
                            href="/"

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook group-hover:text-white">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </Link>
                        <Link
                            className='group theme-transition-3 rounded-full border border-primary p-3 text-primary hover:bg-primary hover:text-neutral-700'
                            href="/"

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook group-hover:text-white">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='section-gap-top grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4'>
                <div className='relative'>
                    <h3 className='text-h3 font-semibold'>Navigation</h3>
                    <ul className='mt-8 flex flex-col gap-y-4 text-mText'>
                        <li className='theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary hover:translate-x-1 hover:ps-3 hover:text-primary hover:before:absolute'>
                           <Link href="/">Home</Link> 
                        </li>
                        <li className='theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary hover:translate-x-1 hover:ps-3 hover:text-primary hover:before:absolute'>
                           <Link href="/">Admission</Link> 
                        </li>
                        <li className='theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary hover:translate-x-1 hover:ps-3 hover:text-primary hover:before:absolute'>
                           <Link href="/">About Us</Link> 
                        </li>
                        <li className='theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary hover:translate-x-1 hover:ps-3 hover:text-primary hover:before:absolute'>
                           <Link href="/">Contact</Link> 
                        </li>
                        <li className='theme-transition-3 relative before:theme-transition-3 before:left-0 before:top-1/2 before:h-1 before:w-1 before:rounded-full before:bg-primary hover:translate-x-1 hover:ps-3 hover:text-primary hover:before:absolute'>
                           <Link href="/">More</Link> 
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <h3 className='text-h3 font-semibold'>Contact Us</h3>
                    <div className='mt-8 flex flex-col gap-6 text-white'>
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </div>
                <div className='relative'>
                    <h3 className='text-h3 font-semibold'>Recent Post</h3>
                    <div className='padding-t-32 flex flex-col gap-6'>
                        <div className='flex gap-6'>
                            <div className='shrink-0'>
                                <Image
                                    src="/post1.png"
                                    alt=''
                                    height={80}
                                    width={80}
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <h5 className='h5 font-semibold'>Demystifying Data Science</h5>
                                <p className='text-mText text-secondary'>23/10/23</p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            <div className='shrink-0'>
                                <Image
                                    src="/post1.png"
                                    alt=''
                                    height={80}
                                    width={80}
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex flex-col gap-3 '>
                                <h5 className='h5 font-semibold'>Demystifying Data Science</h5>
                                <p className='text-mText text-secondary'>23/10/23</p>
                            </div>
                        </div>
                        <CustomLink textColor="secondary" text='See All' url='/' isExternal={false} />
                    </div>  
                </div>
            </div>
            <div className='section-gap-top'>
                <div className='relative h-px'>
                    <div className='line-horizontal-green' />
                </div>
                <div className='flex items-center justify-between py-10 max-sm:flex-col max-sm:gap-3 max-sm:text-center'>
                  <p className='text-mText'>
                    Copyright © 2024 <Link href="/" className='theme-transition-3 text-secondary hover:text-white'>CDM</Link> All Rights Reserved
                  </p>
                  <div className='flex gap-3 max-md:flex-col md:gap-6'>
                    <Link href="/" className='theme-transition-3 hover:text-primary'>Terms & Conditions</Link>
                    <Link href="/" className='theme-transition-3 hover:text-primary'>Privacy Policy</Link>
                  </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer