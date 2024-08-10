import { Container } from "@/components/layout/Container";
import CoursesSection from "@/components/sections/CoursesSection";
import CtaSection from "@/components/sections/CtaSection";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <FeatureSection />
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
    </>
  );
}
