import { FeatureProps } from '@/types'
import Image from 'next/image'
import React from 'react'

function Feature({
    name,
    description,
    image
}: Readonly<FeatureProps>) {
  return (
    <div className='flex items-center gap-6 rounded-[15px]'>
        <div className='border-neutral-30 shrink-0 rounded-full border bg-secondary p-4'>
            <Image
                src={image.url}
                alt={image.alternativeText? image.alternativeText : ''}
                height={28}
                width={28}
            />
        </div>
        <div className='flex flex-col justify-between gap-2'>
            <p className='text-xl font-medium'>{name}</p>
            <p className='text-sm text-neutral-500'>{description}</p>
        </div>
    </div>
  )
}

export default Feature