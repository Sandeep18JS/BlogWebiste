import { client } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'
import { simplifiedBlog } from '@/types/blogpage';

export const revalidate = 30;

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current=='${slug}']{
        _id,
        title,
        description,
          "slug":slug.current ,
          "imageUrl":images[0].asset->url,
          body
    
      }`;
    const data = await client.fetch(query)
    return data
}

const page = async ({ params }: { params: { slug: string } }) => {
    const data: simplifiedBlog[] = await getData(params.slug)
    return (
        <div className='mt-6 px-3'>
            {data.map((blog) => (
                <div key={blog._id} className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-medium'>{blog.title}</h1>
                    <Image
                        src={blog.imageUrl}
                        width={850}
                        height={850}
                        alt="tshirt"
                        quality={100}
                        className='rounded-[10px]'
                    />
                    <p className='font-light text-justify'>{blog.description}</p>
                    <div className='prose dark:prose-invert mt-10 max-w-[850px] text-justify'>
                        <PortableText value={blog.body}></PortableText>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default page