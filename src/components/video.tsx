"use client";

import { CSSProperties, useEffect, useRef, useMemo } from "react";

export const videoData = [
    {
        playbackId: "QMtKKstNfYU",
        metadata: {
            video_id: "video-id-youtube-1",
            video_title: "YouTube Short",
            viewer_user_id: "user-id-007",
        },
    },
    {
        playbackId: "__7UCsbyZWE",
        metadata: {
            video_id: "video-id-youtube-2",
            video_title: "YouTube Short 2",
            viewer_user_id: "user-id-007",
        },
    }
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
    const iframeRef = useRef<HTMLIFrameElement>(null);

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

    // Handle Mute/Unmute without reload
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe?.contentWindow) return;

        const action = muted ? "mute" : "unMute";
        try {
            iframe.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: action, args: [] }),
                "*"
            );
        } catch (e) {
            // Ignore cross-origin errors if any
        }
    }, [muted]);

    // Handle Play/Pause without reload (if autoplay prop toggles)
    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe?.contentWindow) return;

        const action = autoplay ? "playVideo" : "pauseVideo";
        try {
            iframe.contentWindow.postMessage(
                JSON.stringify({ event: "command", func: action, args: [] }),
                "*"
            );
        } catch (e) {
            // Ignore
        }
    }, [autoplay]);

    // Container styles for responsive video
    const containerStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        aspectRatio: getAspectRatio(),
        overflow: "hidden",
        borderRadius: rounded ? "1rem" : "0",
        ...style,
    };

    // Construct YouTube Embed URL
    const src = useMemo(() => {
        const params = new URLSearchParams();
        if (autoplay) params.append("autoplay", "1");
        if (muted) params.append("mute", "1");
        if (loop) {
            params.append("loop", "1");
            params.append("playlist", playbackId); // Required for loop to work
        }
        if (!controls) params.append("controls", "0");
        params.append("rel", "0"); // Hide related videos
        params.append("modestbranding", "1");
        params.append("playsinline", "1");
        if (startTime) params.append("start", startTime.toString());

        // Enable JS API if you want to control it later
        params.append("enablejsapi", "1");
        // Add origin to fix some iOS embedded issues? 
        // params.append("origin", typeof window !== 'undefined' ? window.location.origin : '');

        return `https://www.youtube.com/embed/${playbackId}?${params.toString()}`;
    }, [playbackId, loop, controls, startTime]);

    return (
        <div style={containerStyle} className={className}>
            <iframe
                ref={iframeRef}
                src={src}
                style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    objectFit: "cover",
                    pointerEvents: controls ? 'auto' : 'none', // Ensure clicks go through if no controls
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={metadata?.video_title || "YouTube Video"}
            ></iframe>
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
                muted={false} // Note: YouTube Backgrounds often need mute=true to autoplay reliably
                loop={true}
                controls={false}
                preload="auto"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // objectFit: "cover" doesn't apply to iframes directly in the same way 
                    // To truly cover, we might need a wrapper that scales the iframe. 
                    // But for now, we stretch it.
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
                        pointerEvents: 'none', // Ensure clicks go through if needed
                    }}
                />
            )}
        </div>
    );
}