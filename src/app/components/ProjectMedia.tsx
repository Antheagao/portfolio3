import Image from "next/image";
import ProjectVideo from "./ProjectVideo";

type Props = {
  alt: string;
  priority?: boolean;
  /** Static screenshot, used when no video is available. */
  image?: string;
  /** Base path of a video pair (`<base>.webm` / `<base>.mp4`). */
  videoBase?: string;
  /** Poster frame shown while the video loads. */
  poster?: string;
};

export default function ProjectMedia({ alt, priority, image, videoBase, poster }: Props) {
  if (videoBase) {
    return <ProjectVideo videoBase={videoBase} poster={poster} alt={alt} />;
  }

  if (!image) return null;

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
