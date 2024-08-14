import { getStrapiURL } from '@/lib/utils';
import React from 'react'
import qs from 'qs'
import { HomePageProps } from '@/types';
import NetworkError from '@/components/layout/NetworkError';
import BlockRenderer from '@/components/layout/BlockRenderer';

export const revalidate = 10;

async function loader(slug: string){
    const { fetchData } = await import('@/lib/fetch');
  
    const path = `api/slugify/slugs/page/${slug}`;
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

async function Page({
    params
} : {
    params: {slug: string}
}) {
    const slug = params.slug
    const data = await loader(slug) as HomePageProps
    if(!data) return <NetworkError />
    // console.log(data)
    const blocks = data.blocks
  return (
    <>
    {blocks.map((block, index) => (
     <BlockRenderer key={index} block={block} />
    ))}
    </>
  )
}

export default Page