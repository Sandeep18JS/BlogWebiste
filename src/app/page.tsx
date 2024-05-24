import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { simplified } from '@/types/homepage';

export const revalidate = 30;

async function getContentData(contentType: string) {
  const query = `*[_type == "${contentType}"] | order(_createdAt asc){
    _id,
    title,
    description,
    "slug":slug.current,
    "imageUrl":images[0].asset->url,
  }`;
  return await client.fetch(query);
}

const Page = async () => {
  const blogdata = await getContentData('blog');
  const tutorialdata = await getContentData('tutorial');

  return (
    <div className='my-16 space-y-16'>
      <ContentSection title="Recent Tutorials" data={tutorialdata} path="tutorials" />
      <ContentSection title="Recent Blogs" data={blogdata} path="blogs" />
    </div>
  );
}

export default Page;

const ContentSection = ({ title, data, path }: { title: string, data: simplified[], path: string }) => (
  <section className='space-y-4 px-3'>
    <h1 className='font-semibold text-3xl'>{title}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {data.map((item) => (
        <div key={item._id} className='space-y-2 flex flex-col'>
          <Image
            src={item.imageUrl}
            width={500}
            height={500}
            alt={item.title}
            quality={100}
            className='rounded-[10px]'
          />
          <Link href={`/${path}/${item.slug}`}>
            <h1 className='font-semibold text-[18px] hover:underline'>{item.title}</h1>
          </Link>
          <p className='font-light text-gray-700 dark:text-white text-sm'>{item.description}</p>
        </div>
      ))}
    </div>
  </section>
);


