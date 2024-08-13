import { ReviewsProps } from '@/types'
import { IconStarFilled } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

function ReviewCard({content, name, description, image} : Readonly<ReviewsProps>) {
  return (
    <div className='padding-all-32 gap-32px theme-transition-3 flex flex-col rounded-[16px] border border-transparent bg-secondary/5 bg-opacity-[0.05] hover:border-secondary/30 hover:bg-secondary/10 hover:bg-opacity-[0.05]'>
        <div>
            <div className='flex items-center gap-x-2'>
                <IconStarFilled className='text-amber-400' />
                <IconStarFilled className='text-amber-400' />
                <IconStarFilled className='text-amber-400' />
                <IconStarFilled className='text-amber-400' />
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" fill="currentColor" strokeWidth="0"></path></svg>
            </div>
            <p className='pt-4'>
               {content}
            </p>
        </div>
        <div className='flex items-center gap-6'>
            <div>
                <Image
                    src={image.url}
                    alt={image.alternativeText ? image.alternativeText : ''}
                    height={60}
                    width={60}
                    className='rounded-full'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='h5 font-semibold'>{name}</h5>
                <p className='text-mText'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard