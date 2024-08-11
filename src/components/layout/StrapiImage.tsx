import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  fill?: boolean,
  className?: string;
  style?: any
}

export function StrapiImage({
  src,
  alt,
  height,
  width,
  fill,
  className,
  style
}: Readonly<StrapiImageProps>) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      fill={fill? fill : false}
      height={height}
      width={width}
      className={className}
      style={style}
    />
  );
}