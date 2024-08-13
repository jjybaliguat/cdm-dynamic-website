import { Container } from "@/components/layout/Container";
import CoursesSection from "@/components/sections/CoursesSection";
import CtaSection from "@/components/sections/CtaSection";
import FacultySection from "@/components/sections/FacultySection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Image from "next/image";
import { cn, getStrapiURL } from '@/lib/utils'
import qs from 'qs'
import { HomePageProps } from "@/types";

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
          buttonLink: {populate: true},
          link: {populate: true},
          courses: {
            populate: {
              logo: {
                fields: ["url", "alternativeText"]
              },
              name: {populate: ['Course']},
              link: {populate: true}
            },
          },
          image1: {
            fields: ["url", "alternativeText"]
          },
          image2: {
            fields: ["url", "alternativeText"]
          },
          feature: {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              }
            }
          },
          instructors: {populate: {
            instructor: {populate: {
              image: {
                  fields: ["url", "alternativeText"]
                }
            }}
          }}
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

export default async function Home() {
  const data = await loader() as HomePageProps
    if(!data) return null
    // const hero = data.blocks[0]
    let heroSectionData: any = null
    let courseSectionData: any = null
    let featureSectionData: any = null
    let ctaSectionData: any = null
    let facultySectionData: any = null
    data.blocks.map((block: any)=>{
        if(block.__component == 'sections.hero-section'){
          heroSectionData = block;
        }
        if(block.__component == 'sections.course-section'){
          courseSectionData = block;
        }
        if(block.__component == 'sections.feature-section'){
          featureSectionData = block;
        }
        if(block.__component == 'sections.cta-section'){
          ctaSectionData = block;
        }
        if(block.__component == 'sections.faculty-section'){
          facultySectionData = block;
        }
    })
  return (
    <>
      {heroSectionData && <HeroSection data={heroSectionData} />}
      {courseSectionData && <CoursesSection data={courseSectionData} />}
      {featureSectionData && 
        <div className="relative w-full bg-neutral-50 z-30">
          <FeatureSection data={featureSectionData} />
        </div>      
        }
      {ctaSectionData && <CtaSection data={ctaSectionData} />}
      {facultySectionData &&  <FacultySection data={facultySectionData} />}
      <ReviewsSection />
      <NewsLetterSection />
    </>
  );
}
