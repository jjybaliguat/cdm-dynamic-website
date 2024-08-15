"use client"
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import CustomLink from '../ui/CustomLink'
import CourseCard from '../ui/CourseCard'
import { CoursesSectionProps } from '@/types'
import { getStrapiURL } from '@/lib/utils'
import qs from 'qs'
import MotionContainer from '../ui/MotionContainer'

async function loader(){
    const { fetchData } = await import('@/lib/fetch');

    const path = "api/homepage";
    const baseUrl = getStrapiURL()

    const query = qs.stringify({
        populate: {
          blocks: {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              },
              buttonLink: {populate: true}
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

function CoursesSection({data}: Readonly<CoursesSectionProps>) {
  return (
    <section className='container section-gap-top section-gap-bottom overflow-hidden'>
        <div className='grid-cols-12 overflow-hidden max-xxl:gap-5 md:grid'>
            <div className='col-start-1 col-end-7'>
              <MotionContainer from='left'>
                <h3 className='d4 font-semibold'>
                    {data.heading}
                </h3>
              </MotionContainer>
            </div>
            <div className='col-start-7 col-end-13 max-w-[416px] max-md:mt-5 xl:col-start-8 xxl:col-start-9'>
              <MotionContainer from='right'>
                <p className='lText'>{data.subHeading}</p>
              </MotionContainer>
                <div className='pt-6'>
                    <CustomLink page={data.link.page} text={data.link.text} url={data.link.url} isExternal={data.link.isExternal} />
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