"use client"
import { Send, SendHorizontal } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import MotionContainer from '../ui/MotionContainer'
import { NewsLetterProps } from '@/types'

function NewsLetterSection({data}: Readonly<NewsLetterProps>) {
  return (
    <section className='padding-t-80 relative z-20 overflow-hidden after:absolute after:bottom-0 after:-z-10 after:h-[85%] after:w-full after:bg-black/90 sm:after:h-[50%] lg:after:h-[50%]'>
        <div className='padding-t-80 padding-b-80 z-20 mx-auto max-w-[1600px] bg-primary max-xl:py-10 xl:rounded-[16px] xl:pe-[84px] xxl:ps-[152px]'> 
            <div className='container'>
                <MotionContainer from='left'>
                    <h1 className='h1 text-center font-semibold text-primary-foreground'>{data.heading}</h1>
                </MotionContainer>
            </div>
            <div className='container grid-cols-12 items-center justify-center gap-24 md:grid'>
                <div className='col-start-3 col-end-11 text-center xl:col-start-4 xl:col-end-10'>
                    <MotionContainer from='right'>
                        <p className='mt-4 tracking-wide text-primary-foreground/90'>{data.subHeading}</p>
                    </MotionContainer>
                    <div className='mt-6 xl:mt-10'>
                        <div className='flex items-center justify-between rounded-full py-3 pe-3 ps-8 bg-black'>
                            <input className='me-3 w-full bg-inherit focus:outline-none text-white placeholder:text-white'
                                type='text'
                                placeholder='Enter Your Email...'
                            />
                            <button className='group/button theme-transition-50 rounded-[32px] bg-primary px-4 py-2 sm:px-8 sm:py-4 flex items-center gap-2 text-primary-foreground'>
                                <span>Send</span>
                                <Send className='group-hover/button:hidden transition-transform duration-500 ease-in-out group-hover/button:scale-0 group-hover/button:opacity-0 h-5 w-5' />
                                <SendHorizontal className='-mr-7 group-hover/button:mr-0 group-hover/button:block transition-transform duration-500 ease-in-out tranform scale-0 opacity-0 group-hover/button:scale-100 group-hover/button:opacity-100 h-5 w-5' />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-x-6 sm:items-center">
                        <Checkbox id="terms" className='bg-white' />
                        <label
                            htmlFor="terms"
                            className="text-primary-foreground text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept <Link href="/privacy-policy/" className='underline'>privacy policy</Link> and <Link href="/terms/" className='underline'>terms.</Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetterSection