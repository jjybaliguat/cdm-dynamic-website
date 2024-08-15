"use client"
import { NavBarProps } from '@/types'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import ButtonLink from '../ui/ButtonLink'

function MobileMenu({ctaButton, navLinks}: Readonly<NavBarProps>) {
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
        <div className={`${showNav ? 'left-0' : '-left-[100%]'} lg:hidden flex theme-transition-6 absolute top-[95px] z-[500] h-screen w-full overflow-x-hidden pb-[106px] transition-all duration-1000  translate-x-0 overflow-auto bg-primary opacity-100`}>
        <div className='container max-sm:px-2'>
            <ul className='space-y-4 text-white'>
            {navLinks.map((nav: any, index: any) => (
                <li className="group relative cursor-pointer py-2" key={index}>
                    <Link
                    onClick={()=>setShowNav(!showNav)}
                    href={nav.page?.slug? nav.page.slug : nav.url}
                    target={nav.isExternal? '_blank' : ''}
                    className="inline-block px-4 py-2 text-lg font-normal no-underline rounded-md dark:text-gray-200 hover:text-secondary focus:text-secondary"
                    >
                    {nav.text}
                    </Link>
                </li>
                ))}
                <ButtonLink data={{theme: 'secondary', label: ctaButton.text, url: ctaButton.url, isExternal: ctaButton.isExternal }}/>
            </ul>
        </div>
        </div>
    </>
  )
}

export default MobileMenu
