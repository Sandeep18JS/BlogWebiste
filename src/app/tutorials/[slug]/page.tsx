import { client } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import React from 'react'
import serializers from '../serializers';
import Image from 'next/image';

export const revalidate = 30;


async function getData(slug: string) {
    const query = `*[_type == "tutorial"&&slug.current=='${slug}']{
            _id,
            title,
            description,
              "slug":slug.current ,
              "imageUrl":images[0].asset->url,
              body,
              "h3Texts": body[style == "h3"] {
                "text": children[0].text
              }
          }
          `;
    const data = await client.fetch(query)
    return data
}

export interface simplifiedTutorial {
    _id: string;
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
    body: any;
    h3Texts: { text: string }[];
}


const page = async ({ params }: { params: { slug: string } }) => {
    const data: simplifiedTutorial[] = await getData(params.slug)

    return (
        <div className='flex'>
            {/* Blog */}
            <div className='mt-6 max-w-[850px]'>
                {data.map((tutorial) => (
                    <div key={tutorial._id} className='flex flex-col gap-4'>
                        <h1 className='text-2xl font-medium'>{tutorial.title}</h1>
                        <Image
                            src={tutorial.imageUrl}
                            width={500}
                            height={500}
                            alt="tshirt"
                            quality={100}
                            className='rounded-[10px]  w-[900px] h-[550px]'
                        />
                        <p className='font-light'>{tutorial.description}</p>
                        <div className='prose dark:prose-invert mt-10 max-w-[850px] text-justify'>
                            <PortableText value={tutorial.body} components={serializers}></PortableText>
                        </div>
                    </div>

                ))}
            </div>
            {/* Table of contents */}
            <div className=' w-[200px] h-[100px] fixed right-10 top-36 text-black space-y-4'>
                <h1 className='font-semibold '>On this Page</h1>
                <div className='space-y-4'>
                    {data.map((tutorial) => (
                        tutorial.h3Texts.map((h3Text, index) => (
                            <h3 key={index} className='text-gray-700  text-sm'>{h3Text.text}</h3>
                        )
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page