import { client } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import React from 'react'
import serializers from '../serializers';

export const revalidate = 30;


async function getData(slug: string) {
    const query = `*[_type == "tutorial"&&slug.current=='${slug}']{
            _id,
            title,
            description,
              "slug":slug.current ,
              body
          }
          `;
    const data = await client.fetch(query)
    return data
}

export interface simplifiedBlog {
    _id: string;
    title: string;
    description: string;
    slug: string;
    body: any
}


const page = async ({ params }: { params: { slug: string } }) => {
    const data: simplifiedBlog[] = await getData(params.slug)
    return (
        <div className='mt-6 '>
            {data.map((blog) => (
                <div key={blog._id}>
                    <h1>{blog.title}</h1>

                    <p>{blog.description}</p>
                    <div className='prose'>
                        <PortableText value={blog.body} components={serializers}></PortableText>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default page