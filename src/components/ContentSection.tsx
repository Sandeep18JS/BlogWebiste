'use client'
import { simplified } from "@/types/homepage";
import { format } from "date-fns/format";
import Image from "next/image";
import Link from "next/link";

const ContentSection = ({ data, path }: { data: simplified[], path: string }) => {
    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date');
            }
            return format(date, 'MMMM dd, yyyy');
        } catch (error) {
            return 'Invalid Date';
        }
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
        const video = event.currentTarget;
        video.play();
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
        const video = event.currentTarget;
        video.pause();
    };

    return (
        <section className='space-y-4 px-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {data.map((item) => (
                    <div key={item._id} className='space-y-2 flex flex-col'>
                        {item.Url ? (
                            item.Url.endsWith('.mp4') ? (
                                <div className="w-full image-hover-effect rounded-[10px]">
                                    <video
                                        src={item.Url}
                                        className='rounded-[10px]'
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        muted
                                        loop
                                        playsInline
                                    />
                                </div>
                            ) : (
                                <Image
                                    src={item.Url}
                                    width={850}
                                    height={850}
                                    alt={item.title}
                                    quality={100}
                                    className='rounded-[10px] image-hover-effect'
                                />
                            )
                        ) : null}
                        <p className="text-xs  text-gray-700 dark:text-gray-400">{formatDate(item.publishedAt)}</p>
                        <Link href={`/${path}/${item.slug}`}>
                            <h1 className='font-semibold text-[18px] hover:underline dark:text-[#ebebeb]'>{item.title}</h1>
                        </Link>
                        <p className='font-light text-gray-700 dark:text-gray-400 text-sm text-justify'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default ContentSection 