"use client"
import { SearchIcon, X } from 'lucide-react'
import React, { useState } from 'react'
import MotionContainer from './MotionContainer'
import { Button } from './button'
import { Input } from './input'

function MobileSearch() {
    const [showSearch, setShowSearch] = useState(false)
  return (
    <>
        <div
        onClick={()=>setShowSearch(true)}
        className='flex lg:hidden rounded-full h-fit w-fit p-2 bg-primary cursor-pointer'>
            <SearchIcon className='text-primary-foreground' />
        </div>
        <div
            className={`absolute ${showSearch ? 'top-0' : '-top-[100px]'} lg:hidden flex left-0 theme-transition-6 w-full bg-primary px-8 xl:px-28 py-6`}
        >
            <div className='relative w-full h-fit rounded-full'>
                <Input
                    className='rounded-full py-6 px-6 text-[18px] pr-16 focus:outline-none focus:ring-0 focus:border-transparent'
                    placeholder='Search'
                />
                <div className='absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full h-fit w-fit p-2 bg-primary cursor-pointer'>
                        <SearchIcon className='text-primary-foreground' />
                </div>
            </div>
            <X 
            onClick={()=>setShowSearch(false)}
            className='absolute top-2 right-2 cursor-pointer text-primary-foreground' />
        </div>
    </>
  )
}

export default MobileSearch