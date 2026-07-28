"use client";
import { useEffect, useRef } from "react";

type Props = {
  videoBase: string;
  poster?: string;
  alt: string;
};

// Plays only while scrolled into view, so the demos don't all download
// and loop from initial page load.
export default function ProjectVideo({ videoBase, poster, alt }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="w-full h-full object-cover"
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={alt}
    >
      <source src={`${videoBase}.webm`} type="video/webm" />
      <source src={`${videoBase}.mp4`} type="video/mp4" />
    </video>
  );
}
