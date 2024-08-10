import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface LinkProps {
    text: string,
    url: string,
    isExternal: boolean
}

function CustomLink({
    text,
    url,
    isExternal,
}: Readonly<LinkProps>) {
  return (
    <Link href={url} target={isExternal? '_blank' : ''} className='group/link cursor-pointer theme-transition-500 flex w-fit items-center gap-1 border-b border-neutral-700 pb-1 font-semibold hover:border-secondary hover:text-neutral-500'>
        <span className='text-[14px] tracking-wide capitalize'>{text}</span>
        <span className='group-hover/link:hidden transition-transform duration-500 ease-in-out group-hover/link:scale-0 group-hover/link:opacity-0'><ArrowUpRight /></span>
        <span className='-mr-7 group-hover/link:mr-0 group-hover/link:block transition-transform duration-500 ease-in-out tranform scale-0 opacity-0 group-hover/link:scale-100 group-hover/link:opacity-100'><ArrowRight className='text-secondary' /></span>
    </Link>
  )
}

export default CustomLink