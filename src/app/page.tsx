import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const revalidate = 30;

async function getBlogData() {
  const query = `*[_type == "blog"] | order(_createdAt asc){
    _id,
    title,
    description,
      "slug":slug.current ,
      "imageUrl":images[0].asset->url,
  }`;
  const blogdata = await client.fetch(query)
  return blogdata
}

async function getTutorialData() {
  const query = `*[_type == "tutorial"] | order(_createdAt asc){
    _id,
    title,
    description,
      "slug":slug.current ,
      "imageUrl":images[0].asset->url,
  }`;
  const tutorialdata = await client.fetch(query)
  return tutorialdata

}

export interface simplified {
  _id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
}

const page = async () => {
  const blogdata: simplified[] = await getBlogData();
  const tutorialdata: simplified[] = await getTutorialData();

  return (
    <>
      <div className='my-16 space-y-16'>
        <section className='space-y-4'>
          <h1 className='font-semibold text-3xl '>Recent Tutorials
          </h1>
          <div className='grid grid-cols-3 relative '>
            {tutorialdata.map((blog) => (
              <div key={blog._id} className='w-[350px] space-y-2 flex flex-col'>
                <Image
                  src={blog.imageUrl}
                  width={500}
                  height={500}
                  alt="tshirt"
                  quality={100}
                  className='rounded-[10px]  w-[350px] h-[250px]'
                />
                <Link href={`/blogs/${blog.slug}`} >
                  <h1 className='font-semibold text-[18px] hover:underline'>{blog.title}</h1>
                </Link>
                <p className='font-light text-gray-700 text-sm text-wrap'>{blog.description}</p>
              </div>

            ))}
          </div>
        </section>

        <section className='space-y-4'>
          <h1 className='font-semibold text-3xl '>Recent Blogs
          </h1>
          <div className='grid grid-cols-3 relative '>
            {blogdata.map((blog) => (
              <div key={blog._id} className='w-[350px] space-y-2 flex flex-col'>
                <Image
                  src={blog.imageUrl}
                  width={500}
                  height={500}
                  alt="tshirt"
                  quality={100}
                  className='rounded-[10px]  w-[350px] h-[250px]'
                />
                <Link href={`/blogs/${blog.slug}`} >
                  <h1 className='font-semibold text-[18px] hover:underline'>{blog.title}</h1>
                </Link>
                <p className='font-light text-gray-700 text-sm text-wrap'>{blog.description}</p>
              </div>

            ))}
          </div>
        </section>

      </div>

    </>
  )
}

export default page









