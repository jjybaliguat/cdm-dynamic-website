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
        <div className='group pt-10 pb-10 px-8 gap-[32px] theme-transition-500 relative flex flex-col rounded-[16px] border border-neutral-20 bg-neutral-20 hover:bg-primary'>
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
                <p className='text-xl font-bold text-neutral-800 group-hover:text-primary-foreground'>{name}</p>
                <div>
                    <p className='group-hover:text-primary-foreground'>{description}</p>
                    <div className='pt-6 group-hover:text-primary-foreground'>
                        <CustomLink text={link.text} url={link.url} isExternal={link.isExternal} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard