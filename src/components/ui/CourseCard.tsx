import Image from 'next/image'
import React from 'react'
import CustomLink from './CustomLink'
import { CourseProps } from '@/types'

function CourseCard({
    logo,
    name,
    description,
    link
} : Readonly<CourseProps>) {
  return (
    <div style={{
        opacity: 1,
        transform: 'none'
    }}>
        <div className='group padding-t-40 padding-b-40 padding-s-32 padding-e-32 gap-32px theme-transition-4 relative flex flex-col rounded-[16px] border border-neutral-50 bg-neutral-50 hover:bg-primary'>
            <div className="w-fit rounded-full border border-neutral-30 bg-white p-6">
                 <Image
                    src="/icon1.png"
                    alt=''
                    height={40}
                    width={40}
                    className='h-10 w-10'
                    style={{
                        color: 'transparent'
                    }}
                 />
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-xl font-bold text-neutral-800 group-hover:text-primary-foreground'>{name.name}</p>
                <div>
                    <p className='group-hover:text-primary-foreground'>{description}</p>
                    <div className='pt-6 group-hover:text-primary-foreground'>
                        <CustomLink text={link.text} url={link.url} isExternal={link.isExternal} />
                    </div>
                </div>
            </div>
            <Image 
                src="/card-vector.png"
                alt='Card Vector'
                height={89}
                width={108}
                className='theme-transition-4 visible absolute bottom-0 right-0 opacity-100 group-hover:invisible group-hover:w-0 group-hover:opacity-0'
            />
        </div>
    </div>
  )
}

export default CourseCard