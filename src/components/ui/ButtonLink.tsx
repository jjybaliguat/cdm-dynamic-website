import React from 'react'
import CustomLink from './CustomLink'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface ButtonLinkProps{
    data: {
        theme: string,
        url: string,
        label: string,
        isExternal: boolean
    }
}

function ButtonLink({
    data
}: Readonly<ButtonLinkProps>) {
  return (
    <Link href={data.url} target={data.isExternal? '_blank' : ''} className={`group/button cursor-pointer theme-transition-300 flex w-fit items-center justify-center rounded-[32px] border border-transparent bg-${data.theme} px-6 py-4 text-center text-h6 text-${data.theme}-foreground hover:rounded-[32px] hover:border hover:border-${data.theme} hover:bg-transparent hover:text-neutral-700 sm:px-8`}>
        <span className={`group-hover/button:text-black`}>{data.label}</span>
        <span className='group-hover/button:hidden transition-transform duration-500 ease-in-out group-hover/button:scale-0 group-hover/button:opacity-0'><ArrowUpRight className={`text-${data.theme}-foreground`} /></span>
        <span className='-mr-7 group-hover/button:mr-0 group-hover/button:block transition-transform duration-500 ease-in-out tranform scale-0 opacity-0 group-hover/button:scale-100 group-hover/button:opacity-100'><ArrowRight className='text-secondary' /></span>
    </Link>
  )
}

export default ButtonLink