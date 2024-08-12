import Image from 'next/image'
import React from 'react'
import ButtonLink from '../ui/ButtonLink'
import { CtaProps } from '@/types'

function CtaSection({
    data
}: Readonly<CtaProps>) {
  return (
    <section className='relative z-20 overflow-hidden'>
        <div className='absolute bottom-0 left-0 -z-10 h-1/3 w-full bg-white '/>
        <div className='z-20 mx-auto max-w-[1600px] bg-primary max-xl:py-10 lg:ps-[152px] xl:rounded-[16px] xl:pe-[84px]'>
            <div className='container grid-cols-12 items-end justify-between gap-24 xl:grid'>
                <div className="relative col-start-1 col-end-6">
                    <Image
                        src="/cta-mess-icon1.png"
                        alt='icon1'
                        width={84}
                        height={90}
                        className='absolute left-5 top-0 hidden animate-ping-small sm:left-0 sm:block '
                    />
                    <Image
                        src="/cta-mess-icon3.png"
                        alt='icon3'
                        width={52}
                        height={53}
                        className='absolute left-5 top-10 animate-pulse-smooth sm:left-16  sm:top-20'
                    />
                    <Image
                        src="/cta-mess-icon2.png"
                        alt='icon2'
                        width={65}
                        height={57}
                        className='absolute right-10 top-0 animate-ping-small sm:right-0 xxl:right-5'
                    />
                    <Image
                        src="/cta-mess-icon4.png"
                        alt='icon2'
                        width={67}
                        height={69}
                        className='absolute right-5 top-16 animate-pulse xxl:right-16'
                    />
                    <div style={{
                        // opacity: 0, 
                        transform: 'translateY(40px) translateZ(0px)'
                    }}>
                        <Image
                            src={data.image.url}
                            alt={data.image.alternativeText? data.image.alternativeText : ''}
                            height={497}
                            width={424}
                        />
                    </div>
                </div>
                <div className='py-12 col-start-6 col-end-13 xxl:col-start-7'>
                    <h3 className='section-heading text-primary-foreground'>{data.heading}</h3>
                    <p className='tracking-wide pt-6 text-primary-foreground/90'>{data.subHeading}</p>
                    <div className='mt-10'>
                        <ButtonLink data={data.buttonLink}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CtaSection