import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className='group flex items-center gap-x-5'>
        <div className='theme-transition-3 rounded-full border p-3 border-primary bg-transparent text-primary group-hover:bg-primary group-hover:text-neutral-700'>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white icon icon-tabler icons-tabler-outline icon-tabler-phone">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
        </div>
        <div className='flex flex-col gap-y-1'>
            <Link href="tel:+3567897483">(303) 555-0105</Link>
            <Link href="tel:+3567897483">(219) 555-0144</Link>
        </div>
    </div>
  )
}

export default Contact