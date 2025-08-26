"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type BackgroundCarouselProps = {
  images: string[];
  intervalMs?: number;
};

export default function BackgroundCarousel({ images, intervalMs = 3500 }: BackgroundCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={src} alt={`Hero background ${i + 1}`} fill priority className="object-cover" />
        </div>
      ))}
    </div>
  );
}
