"use client";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FacultySectionProps, InstructorProps } from "@/types";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import InstructorCard from "../ui/InstructorCard";
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { easeInOut, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MotionContainer from '../ui/MotionContainer';

const FacultySection: React.FC<Readonly<FacultySectionProps>> = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInview = useInView(headingRef);

  const subHeadingRef = useRef<HTMLDivElement>(null);
  const subHeadingInview = useInView(subHeadingRef);

  return (
    <div ref={headingRef} className="container section-gap-top pb-1 overflow-hidden">
      <div className='container'>
        <div className='mx-auto h-fit max-w-[696px] text-center'>
          <MotionContainer from='right'>
            <h4 className='d4 font-semibold'>{data.heading}</h4>
          </MotionContainer>
          <MotionContainer from='left'>
            <p className='lText mt-6'>{data.subHeading}</p>
          </MotionContainer>
        </div>
      </div>
      <div className='padding-t-60'>
        <Swiper
          onSwiper={setSwiperRef}
          speed={4000}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centerInsufficientSlides
          breakpointsBase="container"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {data.instructors.map(({instructor}, index) => (
            <SwiperSlide className='swiper-slide' key={index}>
              <InstructorCard name={instructor.name} image={instructor.image} role={instructor.role}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-10 flex justify-center'>
        <div className='flex items-center gap-4'>
          <button className="hover:text-primary-foreground theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primary hover:shadow-four
            hover:shadow-[hsl(var(--secondary))_-4px_0_0_0]"
            onClick={handlePrevious}>
            <ChevronLeft />
          </button>
          <button className="hover:text-primary-foreground theme-transition-3 flex items-center justify-center rounded-full border border-neutral-500 bg-transparent p-3 font-semibold text-neutral-500 hover:bg-primary hover:shadow-four
            hover:shadow-[hsl(var(--secondary))_4px_0_0_0] hover:cursor-pointer"
            onClick={handleNext}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultySection;
