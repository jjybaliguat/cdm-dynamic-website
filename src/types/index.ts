export interface HomePageProps{
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    blocks: [
        HeroSectionProps,
        CoursesSectionProps,
        FeatureSectionProps,
        CtaProps,
        FacultySectionProps,
        ReviewsSectionProps
    ]
}
export interface PageProps {
    params: {
      slug: string;
    };
    searchParams: {};
  }  
export interface HeroSectionProps {
    data: {
        heading: string,
        subHeading: string,
        image: ImageProps,
        buttonLink: ButtonLink
    }
}
export interface FeatureSectionProps {
    data: {
        heading: string,
        subHeading: string,
        image1: ImageProps,
        image2: ImageProps,
        feature: FeatureProps[],
        buttonLink: ButtonLink
    }
}
export interface CoursesSectionProps {
    data: {
        heading: string,
        subHeading: string,
        link: LinkProps
        courses: CourseProps[]
    }
}

export interface FacultySectionProps {
    data: {
        heading: string,
        subHeading: string,
        instructors: {
            instructor: InstructorProps
        }[]
    }
}

export interface InstructorProps {
    name: string,
    role: string,
    image: ImageProps
}

export interface CtaProps {
    data: {
        heading: string,
        subHeading: string,
        buttonLink: ButtonLink,
        image: ImageProps
    }
}

interface ImageProps{
    url: string,
    alternativeText: string | null
}
interface ButtonLink {
    theme: string,
    url: string,
    label: string,
    isExternal: boolean,
    page?: {
        slug: string
    }
}
export interface LinkProps {
    text: string,
    textColor?: string,
    url: string,
    isExternal: boolean,
    page?: {
        slug: string
    }
}
export interface FeatureProps {
    name: string,
    description: string,
    image: ImageProps,
}
export interface CourseProps {
    logo: ImageProps,
    name: {
        name: string
    },
    description: string,
    link: LinkProps,
}
export interface GlobalSectionProps {
    id: number;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    navbar: {
        logoText: LinkProps,
        logo: ImageProps,
        ctaButton: LinkProps,
        navLinks: LinkProps[]
    },
    footer: {
        heading: string,
        subHeading: string,
        copyrightText: any,
        footerLinks: LinkProps[],
        navigation: LinkProps[],
        socialLinks: {
            icon: string,
            url: string
        },
        contact: ContactProps[]
    }
}

export interface ContactProps{
    icon: string,
    contactLink: LinkProps[]
}

export interface ReviewsSectionProps{
    data: {
        heading: string,
        subHeading: string,
        reviews: ReviewsProps[]
    }
}

export interface ReviewsProps{
    id?: number,
    content: string,
    name: string,
    description: string,
    image: ImageProps
}

export interface NewsLetterProps{
    data: {
        heading: string,
        subHeading: string,
        checkboxTermsLabel: any
    }
}