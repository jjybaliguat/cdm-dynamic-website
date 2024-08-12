import { Container } from "@/components/layout/Container";
import CoursesSection from "@/components/sections/CoursesSection";
import CtaSection from "@/components/sections/CtaSection";
import FacultySection from "@/components/sections/FacultySection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection data={{
        heading: 'Explore Our Courses And Build Skills',
        subHeading: 'Welcome to our diverse and dynamic course catalog. were dedicated to providing you with access to high-quality education',
        link: {text: 'See All Courses', url: '/', isExternal: false},
        courses: [
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
          {logo: {url: '/icon1.png', alternativeText: 'course-logo'}, name: 'Engineering & Technology', description: 'Explore the forefront of innovation and technology. Dive into courses in categories...', link: {text: 'Enroll Now', url: '/', isExternal: false}},
        ]
      }} />
      <div className="relative w-full bg-neutral-50 z-30">
        <FeatureSection data={{
          heading: 'Welcome to Edufast University',
          subHeading: 'At Edufast University, our mission is to empower minds, inspire innovation, and foster a community of lifelong learners.',
          image1: {url: '/feature-img1.png', alternativeText: 'feature-img1'},
          image2: {url: '/feature-img2.png', alternativeText: 'feature-img2'},
          feature: [
            {name: 'Academic Excellence', description: 'Edufast University is renowned for its commitment', image: {url: '/feature-icon1.png', alternativeText: 'feature-icon'}},
            {name: 'Academic Excellence', description: 'Edufast University is renowned for its commitment', image: {url: '/feature-icon1.png', alternativeText: 'feature-icon'}},
            {name: 'Academic Excellence', description: 'Edufast University is renowned for its commitment', image: {url: '/feature-icon1.png', alternativeText: 'feature-icon'}},
            {name: 'Academic Excellence', description: 'Edufast University is renowned for its commitment', image: {url: '/feature-icon1.png', alternativeText: 'feature-icon'}},
          ],
          buttonLink: {theme: 'secondary', url: '/', label: 'Read More', isExternal: false}
        }} />
      </div>
      <CtaSection data={{
        heading: "Discover Your Ideal Course Now!",
        subHeading: "Embark on a journey of discovery with Edufast University. Explore our diverse range of courses tailored to your interests and aspirations.",
        buttonLink: {
          theme: 'secondary',
          url: '/',
          label: 'Start Learning',
          isExternal: false
        },
        image: {
          url: '/cta-img.png',
          alternativeText: 'cta-image'
        }
      }}/>
            <FacultySection data={{
        heading: 'Faculty of Excellence',
        subHeading: 'Discover the distinguished members of our faculty, each contributing to the academic excellence of our university.',
        instructors: [
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
          {
            data: {
              imageUrl: '/feature-img1.png',
              name: 'Lorem Ipsum',
              title: 'Lorem'
            }
          },
        ]
      }} />
      <ReviewsSection />
      <NewsLetterSection />
    </>
  );
}
