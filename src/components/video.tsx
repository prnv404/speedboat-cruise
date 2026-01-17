"use client";

import MuxPlayer from "@mux/mux-player-react";
import { CSSProperties, useEffect, useRef } from "react";

export const videoData = [
    {
        playbackId: "Y0000FTikCwPYWEUdewbajK3ASDtdKe4ZVrofCMciYyUk",
        metadata: {
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
        },
    },
    {
        playbackId: "1ium1ikHVgtRewvcFh00C1xPbI29vtK3Lv006FiXXsb7U",
        metadata: {
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
        },
    },
    {
        playbackId: "01Ol7VP8yZSfRjX02QJR188KRY1YE1ZQaxCDu5u43EdD4",
        metadata: {
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
        },
    },
];

export interface VideoProps {
    playbackId: string;
    metadata?: {
        video_id?: string;
        video_title?: string;
        viewer_user_id?: string;
    };
    // Orientation and layout
    orientation?: "landscape" | "portrait" | "auto";
    aspectRatio?: string; // e.g., "16/9", "9/16", "4/3"

    // Autoplay settings
    autoplay?: boolean;
    muted?: boolean; // Required for autoplay in most browsers
    loop?: boolean;

    // Playback controls
    controls?: boolean;
    showLoadingSpinner?: boolean;

    // Styling
    className?: string;
    style?: CSSProperties;
    rounded?: boolean;

    // Advanced features
    preload?: "auto" | "metadata" | "none";
    poster?: string; // Thumbnail image URL
    startTime?: number; // Start playback at specific time (seconds)

    // Callbacks
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (error: Error) => void;
}

export default function Video({
    playbackId,
    metadata,
    orientation = "landscape",
    aspectRatio,
    autoplay = false,
    muted = false, // Default to muted for autoplay compatibility
    loop = true,
    controls = true,
    showLoadingSpinner = true,
    className = "",
    style,
    rounded = false,
    preload = "metadata",
    poster,
    startTime,
    onPlay,
    onPause,
    onEnded,
    onError,
}: VideoProps) {
    const playerRef = useRef<any>(null);

    // Determine aspect ratio based on orientation
    const getAspectRatio = () => {
        if (aspectRatio) return aspectRatio;

        switch (orientation) {
            case "portrait":
                return "9/16"; // Mobile portrait
            case "landscape":
                return "16/9"; // Standard landscape
            case "auto":
                return "auto";
            default:
                return "16/9";
        }
    };

    useEffect(() => {
        const el = playerRef.current;
        if (!el) return;

        if (autoplay) {
            // Ensure element is ready and handle play
            const attemptPlay = () => {
                const p = el.play();
                if (p && typeof p.catch === 'function') {
                    p.catch((e: any) => {
                        // console.warn("Autoplay prevented:", e.message);
                        // If it failed but we want to autoplay, maybe try muting if not already?
                    });
                }
            };

            const timer = setTimeout(attemptPlay, 200);
            return () => clearTimeout(timer);
        } else {
            el.pause();
        }
    }, [autoplay, playbackId]);

    // Container styles for responsive video
    const containerStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        aspectRatio: getAspectRatio(),
        overflow: "hidden",
        borderRadius: rounded ? "1rem" : "0",
        // @ts-ignore
        "--media-loading-icon-display": showLoadingSpinner ? "block" : "none",
        ...style,
    };

    return (
        <div style={containerStyle} className={className}>
            <MuxPlayer
                ref={playerRef}
                playbackId={playbackId}
                metadata={metadata}
                streamType="on-demand"
                // autoPlay is handled manually via ref for precise control in carousels
                muted={muted}
                loop={loop}
                preload={preload}
                playsInline={true}
                poster={poster}
                startTime={startTime}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                // Event handlers
                onPlay={onPlay}
                onPause={onPause}
                onEnded={onEnded}
                onError={(e) => {
                    console.error("Mux Player Error:", e);
                    // Fallback or retry logic could go here
                    onError?.(new Error("Video playback error"));
                }}
                // Accessibility
                title={metadata?.video_title || "Video"}
                // Additional Mux features
                primaryColor="#3b82f6" // Tailwind blue-500
                secondaryColor="#1e40af" // Tailwind blue-800
                // Show/hide controls
                {...(controls ? {} : { controls: false } as any)}
            />
        </div>
    );
}

// Preset components for common use cases

export function LandingPageHero({
    playbackId,
    metadata,
    className = "",
}: {
    playbackId: string;
    metadata?: VideoProps["metadata"];
    className?: string;
}) {
    return (
        <Video
            playbackId={playbackId}
            metadata={metadata}
            orientation="landscape"
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
            rounded={false}
            preload="auto"
            className={className}
            style={{
                maxHeight: "100vh",
            }}
        />
    );
}

export function PortraitVideo({
    playbackId,
    metadata,
    className = "",
}: {
    playbackId: string;
    metadata?: VideoProps["metadata"];
    className?: string;
}) {
    return (
        <Video
            playbackId={playbackId}
            metadata={metadata}
            orientation="portrait"
            autoplay={true}
            muted={false}
            loop={true}
            controls={true}
            rounded={true}
            className={className}
            style={{
                maxWidth: "600px",
                margin: "0 auto",
            }}
        />
    );
}

export function BackgroundVideo({
    playbackId,
    metadata,
    overlay = true,
    overlayOpacity = 0.3,
}: {
    playbackId: string;
    metadata?: VideoProps["metadata"];
    overlay?: boolean;
    overlayOpacity?: number;
}) {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Video
                playbackId={playbackId}
                metadata={metadata}
                orientation="landscape"
                autoplay={true}
                muted={false}
                loop={true}
                controls={false}
                preload="auto"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            />
            {overlay && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
                        zIndex: 1,
                    }}
                />
            )}
        </div>
    );
}