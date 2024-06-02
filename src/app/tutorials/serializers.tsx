import React, { useEffect, useRef } from 'react';
import { PortableTextComponents } from '@portabletext/react';
import CodeBlock from './codeblock';
import Image from 'next/image';

const serializers: PortableTextComponents = {
    types: {
        code: (props) => <CodeBlock value={props.value} />,
        file: (props) => {
            const { asset } = props.value;
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
        },
        image: (props) => {
            const { asset } = props.value;
            const refParts = asset._ref.split('-');
            const imageUrl = `https://cdn.sanity.io/images/37z689uz/production/${refParts[1]}-${refParts[2]}.${refParts[3]}`;

            return (
                <>
                    {imageUrl ?
                        (<Image
                            src={imageUrl}
                            width={850}
                            height={850}
                            alt={"image"}
                            quality={100}
                            className='rounded-[10px] '
                        />) : null}
                </>

            )
        }
    },
};

export default serializers;
