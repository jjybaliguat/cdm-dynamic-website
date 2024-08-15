"use client"
import { GlobalSectionProps, LinkProps } from '@/types'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function MobileMenu({navbar}: {navbar: {navLinks: LinkProps[]}}) {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
        {showNav? (
            <X
            onClick={()=>setShowNav(!showNav)}
            className='flex lg:hidden cursor-pointer' />
        ) : (
            <Menu
        onClick={()=>setShowNav(!showNav)}
        className='flex lg:hidden cursor-pointer' />
        )}
        <div className={`${showNav ? 'visible' : 'hidden'} absolute left-0 top-[95px] z-[500] h-screen w-full overflow-x-hidden overflow-y-scroll pb-[106px] transition-all duration-1000  translate-x-0 overflow-auto bg-black opacity-100`}>
        <div className='container max-sm:px-2'>
            <ul className='space-y-4 text-white'>
            {navbar.navLinks.map((nav: any, index: any) => (
                <li className="group relative cursor-pointer py-2" key={index}>
                    <Link
                    onClick={()=>setShowNav(!showNav)}
                    href={nav.page?.slug? nav.page.slug : nav.url}
                    target={nav.isExternal? '_blank' : ''}
                    className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary"
                    >
                    {nav.text}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
        </div>
    </>
  )
}

export default MobileMenu
