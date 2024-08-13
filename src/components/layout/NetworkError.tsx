'use client'
import React from 'react'
import { Button } from '../ui/button'
import { LoaderIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function NetworkError() {
    const router = useRouter()
  return (
    <div className='h-screen bg-primary text-primary-foreground flex items-center justify-center'>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='d1 font-semibold max-md:text-center'>Oops!</h1>
            <p className='xlText font-medium'>Something went wrong, please check your internet connection.</p>
            <p className='xlText font-medium'>This may also caused by a server error.</p>
            <Button variant='secondary'
                onClick={()=>router.refresh()}
            ><LoaderIcon/> Reload Page</Button>
        </div>
    </div>
  )
}

export default NetworkError