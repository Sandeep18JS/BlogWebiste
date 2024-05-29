import { client } from '@/lib/sanity';
import React from 'react';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';

export const revalidate = 30;

async function getContentData(contentType: string) {
  const query = `*[_type == "${contentType}"][0...3] | order(_createdAt asc){
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
      <div className='space-y-4'>
        <div className='flex justify-between px-3'>
          <h1 className='font-semibold text-3xl'>Recent Tutorials</h1>
          <Link href='/tutorials' className='underline'>See More</Link>
        </div>
        <ContentSection data={tutorialdata} path="tutorials" />
      </div>
      <div className='space-y-4'>
        <div className='flex justify-between px-3'>
          <h1 className='font-semibold text-3xl'>Recent Blogs</h1>
          <Link href='/blogs' className='underline'>See More</Link>
        </div>
        <ContentSection data={blogdata} path="blogs" />
      </div>
    </div>
  );
}

export default Page;



