import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input'
import { SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'
import ButtonLink from '../ui/ButtonLink'
import { getStrapiURL } from '@/lib/utils'
import qs from 'qs'
import { StrapiImage } from '../layout/StrapiImage'
import { GlobalSectionProps } from '@/types'
import MobileMenu from '../layout/MobileMenu'

async function loader(){
    const { fetchData } = await import('@/lib/fetch');

    const path = "api/global";
    const baseUrl = getStrapiURL()

    const query = qs.stringify({
      populate: {
        navbar: {
          populate: {
            logoText: {
              populate: true
            },
            logo: {
              fields: ["url", "alternativeText"]
            },
            ctaButton: {
              populate: true
            },
            navLinks: {
              populate: {
                page: {populate: ['Page']}
              }
            }
          }
        }
      }
    })

    const url = new URL(path, baseUrl)
    url.search = query

    try {
      const data = await fetchData(url.href)
      return data
    } catch (error) {
      console.log(error)
      return null
    }

}

async function Navbar() {
    const data = await loader() as GlobalSectionProps
    console.log(data.navbar.navLinks)
    if(!data) return null
    const nav = data.navbar
  return (
    <div className='w-full shadow-md sticky top-0 z-50 bg-white'>
        <nav className='mx-auto relative flex flex-wrap items-center justify-between py-6 lg:justify-between px-8 xl:px-28'>
            <div className='flex items-center gap-4'>
                <MobileMenu navbar={nav} />
                <Link href={nav.logoText.url}>
                    <div className='flex items-center gap-2'>
                        <div className='relative h-[50px] w-[50px]'>
                            <StrapiImage
                                src={nav.logo.url}
                                alt={nav.logo.alternativeText? nav.logo.alternativeText : ''}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }}
                                className='w-full h-full rounded-full'
                            />
                        </div>
                        <h1 className='font-medium text-3xl'>{nav.logoText.text}</h1>
                    </div>
                </Link>
                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {nav.navLinks.map((nav, index) => (
                        <li className="mr-1 nav__item" key={index}>
                            <Link
                            href={nav.page?.slug? nav.page.slug : nav.url}
                            target={nav.isExternal? '_blank' : ''}
                            className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary focus:text-primary"
                            >
                            {nav.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-4'>
                <div className='relative w-[300px] h-fit rounded-full'>
                    <Input
                        className='rounded-full py-8 px-6 text-[18px] pr-16 focus:outline-none focus:ring-0 focus:border-transparent'
                        placeholder='Search'
                    />
                    <div className='absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full h-fit w-fit p-2 bg-primary cursor-pointer'>
                            <SearchIcon className='text-primary-foreground' />
                    </div>
                </div>
                <ButtonLink data={{theme: 'primary', label: nav.ctaButton.text, url: nav.ctaButton.url, isExternal: nav.ctaButton.isExternal }}/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
