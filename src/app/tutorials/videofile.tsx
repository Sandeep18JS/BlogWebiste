import React, { useEffect, useRef } from 'react'

type Props = {}

const VideoFile = ({ value }: any) => {
    const { asset } = value;
    const refParts = asset._ref.split('-');
    const videoUrl = `https://cdn.sanity.io/files/37z689uz/production/${refParts[1]}.${refParts[2]}`;

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    if (videoUrl.endsWith('.mp4')) {
        return (
            <video
                ref={videoRef}
                className='w-full my-4 rounded-[10px]'
                muted
                autoPlay
                loop
                playsInline
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
        );
    }

    return null;
}

export default VideoFile