import Image from "next/image";

type Props = {
  image: string;
  alt: string;
  priority?: boolean;
  videoBase?: string;      
  poster?: string;  
};

export default function ProjectMedia({ image, alt, priority, videoBase, poster }: Props) {
  if (videoBase) {
    return (
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={`${videoBase}.webm`} type="video/webm" />
        <source src={`${videoBase}.mp4`} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
    />
  );
}