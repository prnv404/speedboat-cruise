"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroCarouselProps = {
  images: string[];
  intervalMs?: number;
};

export default function HeroCarousel({ images, intervalMs = 3500 }: HeroCarouselProps) {
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
    <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image src={src} alt={`Hero slide ${i + 1}`} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
        </div>
      ))}
    </div>
  );
}
