import { Container } from "@/components/layout/Container";
import CoursesSection from "@/components/blocks/Courses";
import CtaSection from "@/components/blocks/Cta";
import FacultySection from "@/components/blocks/Faculty";
import FeatureSection from "@/components/blocks/Feature";
import HeroSection from "@/components/blocks/Hero";
import NewsLetterSection from "@/components/blocks/NewsLetter";
import ReviewsSection from "@/components/blocks/Reviews";
import Image from "next/image";
import { cn, getStrapiURL } from '@/lib/utils'
import qs from 'qs'
import { HomePageProps } from "@/types";
import NetworkError from "@/components/layout/NetworkError";
import BlockRenderer from "@/components/layout/BlockRenderer";
import MultiStepForm from "@/components/ui/MultiStepForm";

export const revalidate = 10;

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
          buttonLink: {
            populate: {
              page: {populate: ['Page']}
            }
          },
          link: {
            populate: {
              page: {populate: ['Page']}
            }
          },
          courses: {
            populate: {
              logo: {
                fields: ["url", "alternativeText"]
              },
              name: {populate: ['Course']},
              link: {
                populate: {
                  page: {populate: ['Page']}
                }
              }
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
          }},
          reviews: {
            populate: {
              image: {
                fields: ["url", "alternativeText"]
              }
            }
          },
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
    if(!data) return <NetworkError />
    const blocks = data.blocks
  return (
    <>
        {/* <div className="h-screen w-full">
          <MultiStepForm />
        </div> */}
       {blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
      ))}
    </>
  );
}
