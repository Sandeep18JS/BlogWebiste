'use client'
import { PortableText } from '@portabletext/react';
import React, { useEffect, useRef } from 'react';
import serializers from '@/app/tutorials/serializers';
import Image from 'next/image';
import { simplified } from '@/types/blogortutorial';

export const revalidate = 30;

const BlogOrTutorial = ({ data }: { data: simplified[] }) => {
    const allTocRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});
    const allBodyRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const intersectingKey = Object.keys(allBodyRefs.current).find(
                        key => allBodyRefs.current[key] === entry.target
                    );
                    if (intersectingKey) {
                        allTocRefs.current[intersectingKey]!.style.color = "#0FA4AF";
                        Object.keys(allTocRefs.current).forEach(key => {
                            if (key !== intersectingKey) {
                                allTocRefs.current[key]!.style.color = "";
                            }
                        }
                        );
                    }
                }
            });
        });

        Object.values(allBodyRefs.current).forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            Object.values(allBodyRefs.current).forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className='flex-1 grid lg:grid-cols-[850px_minmax(0,1fr)] lg:gap-14  px-3 lg:px-0'>
            {/* Tutorial */}
            <div className='mt-6 max-w-[850px]'>
                {data.map((tutorial) => (
                    <div key={tutorial._id} className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-medium'>{tutorial.title}</h1>
                        <Image
                            src={tutorial.imageUrl}
                            width={850}
                            height={850}
                            alt="tshirt"
                            quality={100}
                            className='rounded-[10px] '
                        />
                        <p className='font-light text-justify'>{tutorial.description}</p>
                        <div className='prose dark:prose-invert mt-10 max-w-[850px] text-justify'>
                            <PortableText value={tutorial.body}
                                components={{
                                    ...serializers,
                                    block: {
                                        h3: ({ children, value }) => (
                                            <h3 ref={(el) => allBodyRefs.current[value._key] = el} key={value._key}>
                                                {children}
                                            </h3>
                                        ),
                                    },
                                }}>
                            </PortableText>
                        </div>
                    </div>
                ))}
            </div>

            {/* Table of contents */}
            <div className='fixed top-32 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 lg:sticky lg:block space-y-4'>
                <h1 className='font-semibold'>On this Page</h1>
                <div className='space-y-4'>
                    {data.map((tutorial) => (
                        tutorial.h3Texts.map((h3Text) => (
                            <h3
                                key={h3Text.key}
                                id={h3Text.key}
                                className=' text-sm'
                                ref={(el) => allTocRefs.current[h3Text.key] = el}
                            >
                                {h3Text.text}
                            </h3>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogOrTutorial;
