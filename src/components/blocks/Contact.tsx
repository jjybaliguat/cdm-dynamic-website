import React from 'react'
import Contacts from '../ui/Contact'
import { PhoneIcon } from 'lucide-react'
import ButtonLink from '../ui/ButtonLink'

function Contact() {
  return (
    <div className="relative bg-neutral-50">
        <div className="container section-gap-top section-gap-bottom grid grid-cols-12 gap-6">
            <div  className='col-start-1 col-end-13 xl:col-end-5'>
                <div className='padding-all-32 gap-40px sticky top-32  flex flex-col rounded-[16px] bg-white'>
                    <h3 className='h3 font-semibold'>
                        Need more help?
                    </h3>
                    <div className='relative h-px w-full'><div className='line-horizontal-n-40' /></div>
                    <div className='flex flex-col gap-6'>
                        <div className='gap-32px flex items-center rounded-[16px] border-neutral-40 bg-neutral-20 p-6'>
                            <div className='rounded-full border border-neutral-40 bg-white p-6'>
                                <PhoneIcon />
                            </div>
                            <div className=''>
                                <h5 className="h5 font-semibold">Call Now</h5>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                            </div>
                        </div>
                        <div className='gap-32px flex items-center rounded-[16px] border-neutral-40 bg-neutral-20 p-6'>
                            <div className='rounded-full border border-neutral-40 bg-white p-6'>
                                <PhoneIcon />
                            </div>
                            <div className=''>
                                <h5 className="h5 font-semibold">Call Now</h5>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                            </div>
                        </div>
                        <div className='gap-32px flex items-center rounded-[16px] border-neutral-40 bg-neutral-20 p-6'>
                            <div className='rounded-full border border-neutral-40 bg-white p-6'>
                                <PhoneIcon />
                            </div>
                            <div className=''>
                                <h5 className="h5 font-semibold">Call Now</h5>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                                <a className="block" href="tel:+3567897483">(303) 555-0105</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div  className='col-start-1 col-end-13 xl:col-start-5'>
                <div className='padding-all-32 gap-40px flex flex-col rounded-[16px] bg-white'>
                    <h3 className='h3 font-semibold'>Get in touch with us.</h3>
                    <div className='relative h-px w-full'>
                        <div className='line-horizontal-n-40' />
                    </div>
                    <div className='flex flex-col gap-6'>
                        <form className='flex flex-col gap-6 rounded-lg bg-white '>
                            <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
                                <div>
                                    <label htmlFor='name' className='lText mb-3 block font-medium'>Name</label>
                                    <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter name...'
                                    name="name"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name' className='lText mb-3 block font-medium'>Name</label>
                                    <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter name...'
                                    name="name"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name' className='lText mb-3 block font-medium'>Email</label>
                                    <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter name...'
                                    name="name"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name' className='lText mb-3 block font-medium'>Name</label>
                                    <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter name...'
                                    name="name"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2'>
                                <div>
                                    <label htmlFor='phone' className='lText mb-3 block font-medium'>Phone</label>
                                    <input
                                    type='text'
                                    id='phone'
                                    placeholder='Enter Your Number...'
                                    name="phone"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='country' className='lText mb-3 block font-medium'>Country</label>
                                    <input
                                    type='country'
                                    id='country'
                                    placeholder='Enter Your Number...'
                                    name="country"
                                    className='w-full rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 focus:outline-none'
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='country' className='lText mb-3 block font-medium'>Country</label>
                                <textarea className="w-full appearance-none rounded-[32px] border border-neutral-40 bg-neutral-20 px-6 py-3 leading-tight focus:outline-none" id="question" rows={8} placeholder="Write your question..." name="message"></textarea>
                            </div>
                            <div className='mt-4'>
                                <ButtonLink data={{
                                    theme: "primary",
                                    label: "Send Message",
                                    url: "/",
                                    isExternal: false
                                }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Contact