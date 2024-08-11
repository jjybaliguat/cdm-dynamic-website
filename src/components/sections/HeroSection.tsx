import React from 'react'
import { Container } from '../layout/Container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowUpRight, CheckCircleIcon, CircleCheck, PlusIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Image from 'next/image'
import { HeroSectionProps } from '@/types'
import { cn } from '@/lib/utils'

function HeroSection({data}: Readonly<HeroSectionProps>) {
  return (
    <section className='overflow-clip pt-12'>
        <div className='container'>
            <div className='grid-cols-12 flex-col items-center justify-between gap-6 max-md:flex md:grid'>
                <div className='col-start-1 col-end-9 lg:col-end-10 xxl:col-end-11'>
                    <div style={{
                        opacity: 1,
                        transform: 'none'
                    }}>
                        <h1 className='h1 font-semibold max-md:text-center'>{data.heading}</h1>
                    </div>
                </div>
                <div className='col-start-9 col-end-13 w-fit max-md:padding-all-32 lg:col-start-10 xxl:col-start-11'>
                    <Link
                        href=''
                        target={data.buttonLink.isExternal? '_blank' : ''}
                        className={cn({
                            'hover:text-white group transition-all ease-in-out duration-300 flex items-center justify-center gap-1 rounded-full border border-neutral-500 font-semibold max-md:p-5  md:px-8 md:py-[84px]': true,
                            'bg-primary text-primary-foreground': data.buttonLink.theme == 'primary',
                            'bg-secondary text-secondary-foreground': data.buttonLink.theme == 'secondary',
                            'btn-ghost': data.buttonLink.theme == 'ghost',
                        })}
                    >
                        <span>{data.buttonLink.label}</span>
                        <ArrowUpRight />
                    </Link>
                </div>
            </div>
            <div className='grid-cols-12 flex-col items-center justify-between gap-6 md:pt-10 max-md:flex max-md:items-center md:grid'>
                <div className='col-start-1 col-end-6 flex w-fit items-center gap-4 rounded-full border border-neutral-30 bg-neutral-20 px-6 py-3 xl:col-end-4'>
                    <div className='profile-pile'>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='profile-pic'>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='profile-pic -ml-[25px] flex h-12 w-12 items-center justify-center rounded-full border border-white  px-3 py-1 text-center text-xsText font-semibold bg-primary'>
                            <span><PlusIcon className='text-primary-foreground' /></span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='font-semibold'>1.5k+</h3>
                        <p>Students</p>
                    </div>
                </div>
                <div className='col-start-6 col-end-13 xl:col-start-8' style={{
                    opacity: 1,
                    transform: 'none'
                }}>
                    <p className='text-[20px] font-medium'>{data.subHeading}</p>
                </div>
            </div>
            <div className='pt-12 relative'>
                <div className='absolute top-1/2 lg:-top-6 left-1/2 lg:left-[400px] z-30 rounded-full  border  border-neutral-500 bg-white p-2 max-xxl:-translate-y-1/2 xxl:-top-3 xxl:-translate-x-[160px]'>
                    <div className='relative'>
                        <Image 
                            src="/rounded-text.png"
                            alt=''
                            height={121}
                            width={121}
                            className='animate-spin-slow'
                            style={{
                                color: 'transparent'
                            }}
                        />
                        <div className='absolute left-1/2 top-1/2  z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-500 bg-white p-3 text-secondaryColorTwo sm:p-5 xl:top-1/2 '>
                            <div>
                                <CircleCheck className='text-white bg-[#039b59] rounded-full h-9 w-9' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        src={data.image.url}
                        alt={data.image.alternativeText? data.image.alternativeText : ''}
                        width={1608}
                        height={446}
                        className='max-w-[unset]'
                        style={{
                            color: 'transparent'
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection