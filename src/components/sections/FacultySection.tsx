"use client";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FacultySectionProps } from "@/types";
import { SwiperSlide, Swiper, SwiperClass } from "swiper/react";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import InstructorCard from "../ui/InstructorCard";
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { easeInOut, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div ref={headingRef} className="container section-gap-top section-gap-bottom overflow-hidden">
      <motion.h1
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: headingInview ? 0 : 20, opacity: headingInview ? 1 : 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className='section-heading text-center'
      >
        {data.heading}
      </motion.h1>
      <motion.p
        ref={subHeadingRef}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: subHeadingInview ? 0 : -20, opacity: subHeadingInview ? 1 : 0 }}
        transition={{ duration: 1, ease: easeInOut }}
        className="tracking-wide pt-6 pb-6 text-center max-w-[600px] m-auto"
      >
        {data.subHeading}
      </motion.p>
      <Swiper
        onSwiper={setSwiperRef}
        speed={4000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        centerInsufficientSlides
        breakpointsBase="container"

        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev'
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {data.instructors.map((instructor, index) => (
          <SwiperSlide key={index}>
            <InstructorCard data={instructor.data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center mt-6 gap-6 w-full'>
        <div className="swiper-prev p-4 rounded-full outline outline-slate-900 outline-1 transition-all
          hover:shadow-[hsl(var(--secondary))_-4px_0_0_0] hover:cursor-pointer hover:bg-[#E9FF5E]"
          onClick={handlePrevious}>
          <ChevronLeft />
        </div>
        <div className="swiper-next p-4 rounded-full outline outline-slate-900 outline-1 transition-all
          hover:shadow-[hsl(var(--secondary))_4px_0_0_0] hover:cursor-pointer hover:bg-[#E9FF5E]"
          onClick={handleNext}>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default FacultySection;
