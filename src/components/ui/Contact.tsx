import { ContactProps } from '@/types'
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Contacts({
  icon,
  contactLink
} : Readonly<ContactProps>) {
  return (
    <div className='group flex items-center gap-x-5'>
        <div className='theme-transition-3 rounded-full border p-3 border-primary bg-transparent text-primary group-hover:bg-primary group-hover:text-primary-foreground'>
            {icon === "phone-icon" ? (<PhoneIcon />) : icon === "mail-icon" ? (<MailIcon />) : icon === "map-icon" ? (<MapPin />) : ""}
        </div>
        <div className='flex flex-col gap-y-1'>
          {contactLink.map((link, index)=>(
            <Link key={index} href={link.url}>{link.text}</Link>
          ))}
        </div>
    </div>
  )
}

export default Contacts