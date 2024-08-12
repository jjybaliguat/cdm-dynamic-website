
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
    isExternal: boolean
}
export interface LinkProps {
    text: string,
    textColor?: string,
    url: string,
    isExternal: boolean
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
export interface NavbarProps {
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
    }
}