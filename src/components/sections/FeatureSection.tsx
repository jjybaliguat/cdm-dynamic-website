import Image from 'next/image'
import React from 'react'
import Feature from '../ui/Feature'

function FeatureSection() {
  return (
    <section className='container section-gap-top section-gap-bottom overflow-hidden'>
        <div className='grid-cols-12 items-center justify-between gap-6 lg:grid'>
            <div className='col-start-1 col-end-7 xl:col-end-6'>
                <div className='flex gap-3 max-lg:justify-center max-md:flex-col sm:gap-6 lg:justify-between'>
                    <Image
                        src="/feature-img1.png"
                        alt=''
                        height={464}
                        width={335}
                        className='-z-10 rounded-[16px]'
                        style={{
                            color: "transparent"
                        }}
                    />
                </div>
                <div className='[500px]:-mt-32 mx-auto mt-4 w-fit sm:-mt-40 md:-mt-52 lg:-mt-24 lg:ms-auto xxl:-mt-36'>
                    <div className='z-10 w-fit rounded-[16px]  bg-white p-1  '>
                        <Image
                            src="/feature-img2.png"
                            alt=''
                            height={348}
                            width={364}
                            className='rounded-[16px]'
                            style={{
                                color: "transparent"
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='col-start-7 col-end-13 max-lg:pt-10'>
                <h3 className='section-heading'>Welcome to Edufast University</h3>
                <p className='tracking-wide pt-6'>At Edufast University, our mission is to empower minds, inspire innovation, and foster a community of lifelong learners.</p>
                <div className='pt-10 gap-[40px] flex flex-col'>
                    <div className='gap-[32px] xl:grid xl:grid-cols-2 flex flex-col'>
                        <Feature 
                            name='Academic Excellence' 
                            description='Edufast University is renowned for its commitment'
                            image={{
                                url: '/feature-icon1.png',
                                alternativeText: null
                            }}
                        />
                        <Feature 
                            name='Academic Excellence' 
                            description='Edufast University is renowned for its commitment'
                            image={{
                                url: '/feature-icon1.png',
                                alternativeText: null
                            }}
                        />
                        <Feature 
                            name='Academic Excellence' 
                            description='Edufast University is renowned for its commitment'
                            image={{
                                url: '/feature-icon1.png',
                                alternativeText: null
                            }}
                        />
                        <Feature 
                            name='Academic Excellence' 
                            description='Edufast University is renowned for its commitment'
                            image={{
                                url: '/feature-icon1.png',
                                alternativeText: null
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection