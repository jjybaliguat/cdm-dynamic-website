"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconChevronLeft, IconChevronRight, IconStar, IconStarFilled } from '@tabler/icons-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import ReviewCard from '../ui/ReviewCard';
import { ReviewsSectionProps } from '@/types';

function ReviewsSection({data} : Readonly<ReviewsSectionProps>) {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
  return (
    <section className='container section-gap-top section-gap-bottom overflow-hidden'>
        <div className='mx-auto max-w-[661px] text-center'>
            <h4 className='d4 font-semibold'>{data.heading}</h4>
            <p className='lText mt-6'>{data.subHeading}</p>
        </div>
        <div className='padding-t-60'>
            <Swiper
            speed={1400}
            breakpoints={{
                // when window width is >= 640px
                640: {
                //   width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                //   width: 768,
                  slidesPerView: 2,
                },
              }}
            spaceBetween={30}
            // centeredSlides={true}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
             onBeforeInit={(swiper: any) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
             }}
            // pagination={{
            // clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
                <div className='mt-10 flex justify-center'>
                    <div className='flex items-center gap-4'>
                        <button
                         ref={navigationPrevRef}
                        className='hover:text-primary-foreground theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primary hover:shadow-four
            hover:shadow-[hsl(var(--secondary))_-4px_0_0_0]'>
                            <IconChevronLeft stroke={2} />
                        </button>
                        <button ref={navigationNextRef} className='hover:text-primary-foreground theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primary hover:shadow-four
            hover:shadow-[hsl(var(--secondary))_4px_0_0_0] hover:cursor-pointer'>
                            <IconChevronRight stroke={2} />
                        </button>
                    </div>
                </div>
                {data.reviews.map((review, index)=>(
                    <SwiperSlide key={index}>
                        <ReviewCard content={review.content} name={review.name} description={review.description} image={review.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default ReviewsSection