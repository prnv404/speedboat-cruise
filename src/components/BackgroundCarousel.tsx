"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Video, { VideoProps } from "./video";

type BackgroundCarouselProps = {
  images?: string[];
  videos?: { playbackId: string; metadata?: VideoProps['metadata'] }[];
  intervalMs?: number;
  overlay?: boolean;
  overlayOpacity?: number;
};

export default function BackgroundCarousel({
  images,
  videos,
  intervalMs = 10000,
  overlay = true,
  overlayOpacity = 0.3
}: BackgroundCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Determine which mode we are in
  const mode = videos && videos.length > 0 ? "video" : images && images.length > 0 ? "image" : "none";
  const itemsLength = mode === "video" ? videos!.length : mode === "image" ? images!.length : 0;

  useEffect(() => {
    if (itemsLength <= 1) return;

    // For videos, we might want longer intervals or rely on onEnded (if we had control over it in this structure)
    // For now, we use time-based cycling for consistency with the previous request style
    // But for a single video, we don't need to cycle.

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % itemsLength);
    }, intervalMs);
    return () => clearInterval(id);
  }, [itemsLength, intervalMs]);

  if (mode === "none") return null;

  return (
    <div className="absolute inset-0 bg-black">
      {/* Video Mode */}
      {mode === "video" && videos && (
        <>
          {videos.map((video, i) => (
            <div
              key={video.playbackId + i}
              className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <Video
                playbackId={video.playbackId}
                metadata={video.metadata}
                orientation="landscape"
                autoplay={i === index}
                muted={isMuted}
                loop={true}
                controls={false}
                showLoadingSpinner={false}
                preload={i === index || i === (index + 1) % itemsLength ? "auto" : "metadata"}
                // @ts-ignore - MuxPlayer passed props
                playsInline={true}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                  aspectRatio: "unset"
                }}
              />
            </div>
          ))}

          {/* Mute Toggle Button */}
          <div className="absolute bottom-24 md:bottom-36 right-8 z-30 animate-fade-in pointer-events-auto">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 hover:border-emerald-500/50 group"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </>
      )}

      {/* Image Mode */}
      {mode === "image" && images && (
        <>
          {images.map((src, i) => (
            <div
              key={src + i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={src}
                alt={`Hero background ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </>
      )}

      {/* Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          }}
        />
      )}
    </div>
  );
}
