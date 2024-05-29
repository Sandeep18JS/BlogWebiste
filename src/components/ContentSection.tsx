import { simplified } from "@/types/homepage";
import Image from "next/image";
import Link from "next/link";

const ContentSection = ({ data, path }: { data: simplified[], path: string }) => (
    <section className='space-y-4 px-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((item) => (
                <div key={item._id} className='space-y-2 flex flex-col'>
                    {item.imageUrl ?
                        <Image
                            src={item.imageUrl}
                            width={500}
                            height={500}
                            alt={item.title}
                            quality={100}
                            className='rounded-[10px]'
                        /> : null
                    }
                    <Link href={`/${path}/${item.slug}`}>
                        <h1 className='font-semibold text-[18px] hover:underline dark:text-[#f0f0f0]'>{item.title}</h1>
                    </Link>
                    <p className='font-light text-gray-700 dark:text-gray-400 text-sm text-justify'>{item.description}</p>
                </div>
            ))}
        </div>
    </section>
);

export default ContentSection 