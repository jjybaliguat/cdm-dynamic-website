import HeroSection from "@/components/sections/HeroSection";
import CoursesSection from "../sections/CoursesSection";
import FeatureSection from "../sections/FeatureSection";
import CtaSection from "../sections/CtaSection";
import FacultySection from "../sections/FacultySection";

export default function BlockRenderer({ block } : any){
    switch (block.__component) {
      case 'sections.hero-section':
        return <HeroSection data={block} />;
      case 'sections.course-section':
        return <CoursesSection data={block} />;
      case 'sections.feature-section':
        return (<div className="relative w-full bg-neutral-50 z-30">
                    <FeatureSection data={block} />
                </div>)
      case 'sections.cta-section':
        return <CtaSection data={block} />;
      case 'sections.faculty-section':
        return <FacultySection data={block} />;
      // Add more cases for different block types
      default:
        return null;
    }
  };