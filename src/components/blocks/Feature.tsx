"use client"
import Image from 'next/image'
import React from 'react'
import Feature from '../ui/Feature'
import { FeatureSectionProps } from '@/types'
import ButtonLink from '../ui/ButtonLink'
import MotionContainer from '../ui/MotionContainer'

function FeatureSection({data}: Readonly<FeatureSectionProps>) {
  return (
    <section className='container section-gap-top section-gap-bottom overflow-hidden'>
        <div className='grid-cols-12 items-center justify-between gap-6 lg:grid'>
            <div className='col-start-1 col-end-7 xl:col-end-6'>
                <div className='flex gap-3 max-lg:justify-center max-md:flex-col sm:gap-6 lg:justify-between'>
                    <Image
                        src={data.image1.url}
                        alt={data.image1.alternativeText? data.image1.alternativeText : ''}
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
                            src={data.image2.url}
                            alt={data.image2.alternativeText? data.image2.alternativeText : ''}
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
                <MotionContainer from='left'>
                    <h3 className='d4 font-semibold'>{data.heading}</h3>
                </MotionContainer>
                <MotionContainer from='right'>
                    <p className='lText mt-6'>{data.subHeading}</p>
                </MotionContainer>
                <div className='pt-10 gap-[40px] flex flex-col'>
                    <div className='gap-[28px] xl:grid xl:grid-cols-2 flex flex-col'>
                        {data.feature.map((feature, index)=>(
                            <Feature key={index}
                            name={feature.name}
                            description={feature.description}
                            image={feature.image}
                        />
                        ))}
                    </div>
                    <ButtonLink data={{
                        theme: data.buttonLink.theme,
                        url: data.buttonLink.url,
                        isExternal: data.buttonLink.isExternal,
                        label: data.buttonLink.label
                    }} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection