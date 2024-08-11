import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import CustomLink from '../ui/CustomLink'
import CourseCard from '../ui/CourseCard'
import { CoursesSectionProps } from '@/types'

function CoursesSection({data}: Readonly<CoursesSectionProps>) {
  return (
    <section className='container section-gap-top section-gap-bottom overflow-hidden'>
        <div className='grid-cols-12 overflow-hidden max-xxl:gap-5 md:grid'>
            <div className='col-start-1 col-end-7'>
                <h3 className='section-heading'>
                    {data.heading}
                </h3>
            </div>
            <div className='col-start-7 col-end-13 max-w-[416px] max-md:mt-5 xl:col-start-8 xxl:col-start-9'>
                <p className='tracking-wide'>{data.subHeading}</p>
                <div className='pt-6'>
                    <CustomLink text={data.link.text} url={data.link.url} isExternal={data.link.isExternal} />
                </div>
            </div>
        </div>
        <div className='pt-14'>
            <div className='grid items-center justify-center gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {data.courses.map((course, index)=>(
                    <CourseCard key={index} logo={course.logo} name={course.name} description={course.description} link={course.link} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default CoursesSection