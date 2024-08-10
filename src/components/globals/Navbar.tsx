import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'

const navLinks = [
    'Home',
    'Admission',
    'About',
    'Blogs',
]

function Navbar() {

  return (
    <div className='w-full shadow-md sticky top-0 z-50 bg-white'>
        <nav className='mx-auto relative flex flex-wrap items-center justify-between py-6 lg:justify-between px-8 xl:px-28'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <div className='relative h-[50px] w-[50px]'>
                        <Image  
                            src="/cdm-logo.png"
                            alt='cdm-logo'
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                            className='w-full h-full rounded-full'
                        />
                    </div>
                    <h1 className='font-medium text-3xl'>CDM</h1>
                </div>
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navLinks.map((_, index) => (
                        <li className="mr-1 nav__item" key={index}>
                            <Link
                            href=''
                            className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary"
                            >
                            {navLinks[index]}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='relative w-[300px] h-fit rounded-full'>
                    <Input
                        className='rounded-full py-8 px-6 text-[18px] pr-16 focus:outline-none focus:ring-0 focus:border-transparent'
                        placeholder='Search'
                    />
                    <div className='absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full h-fit w-fit p-2 bg-primary cursor-pointer'>
                            <SearchIcon className='text-primary-foreground' />
                    </div>
                </div>
                <Button>Login</Button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar