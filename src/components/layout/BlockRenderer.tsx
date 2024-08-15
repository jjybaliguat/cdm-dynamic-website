import HeroSection from "@/components/blocks/Hero";
import CoursesSection from "../blocks/Courses";
import FeatureSection from "../blocks/Feature";
import CtaSection from "../blocks/Cta";
import FacultySection from "../blocks/Faculty";
import ReviewsSection from "../blocks/Reviews";
import NewsLetterSection from "../blocks/NewsLetter";
import Contact from "../blocks/Contact";

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
      case 'sections.reviews-section':
        return <ReviewsSection data={block} />;
      case 'sections.newsletter-section':
        return <NewsLetterSection data={block} />;
      case 'sections.contact-section':
        return <Contact />;
      // Add more cases for different block types
      default:
        return null;
    }
  };