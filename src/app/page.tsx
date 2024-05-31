import { client } from '@/lib/sanity';
import React from 'react';
import ContentSection from '@/components/ContentSection';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

export const revalidate = 30;

async function getContentData(contentType: string) {
  const query = `*[_type == "${contentType}"][0...3] | order(_createdAt asc){
    _id,
    title,
    description,
    publishedAt,
    "slug":slug.current,
    "imageUrl":images[0].asset->url,
  }`;
  return await client.fetch(query);
}

const Page = async () => {
  const blogdata = await getContentData('blog');
  const tutorialdata = await getContentData('tutorial');

  return (
    <div className='my-16 space-y-28 dark:text-[#ebebeb]'>
      <div className='px-3 text-5xl leading-[60px] tracking-[0.2px] font-bold dark:text-[#ebebeb] space-y-8'>
        <h1 className=''>Hi 👋🏻 I'm Sandeep! <span className='text-gray-600 dark:text-gray-500'> Welcome to my blog where I share my latest adventures and discoveries.</span></h1>
        <div className='flex gap-4'>
          <Link href='https://sandeep-alpha.vercel.app/' className="w-[120px] p-2 gap-1 flex justify-center items-center rounded-md border border-gray-500 bg-[#f7f7f7] dark:text-[#ebebeb] dark:bg-[#101014] text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-black dark:hover:shadow-[#ebebeb] transition duration-200">
            <p>About me</p>
            <MoveUpRight size={18} />
          </Link>
          <Link href='https://sandeep-alpha.vercel.app/' className="w-[120px] p-2 gap-1 flex justify-center items-center rounded-md border border-gray-500 bg-[#f7f7f7] dark:text-[#ebebeb] dark:bg-[#101014] text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-black dark:hover:shadow-[#ebebeb] transition duration-200">
            <p>Contact</p>
            <MoveUpRight size={18} />
          </Link>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex justify-between px-3'>
          <h1 className='text-3xl  font-bold dark:text-[#ebebeb]'>Recent Tutorials</h1>
          <Link href='/tutorials' className='underline'>See More</Link>
        </div>
        <ContentSection data={tutorialdata} path="tutorials" />
      </div>
      <div className='space-y-4'>
        <div className='flex justify-between px-3'>
          <h1 className='text-3xl  font-bold dark:text-[#ebebeb]'>Recent Blogs</h1>
          <Link href='/blogs' className='underline'>See More</Link>
        </div>
        <ContentSection data={blogdata} path="blogs" />
      </div>
    </div>
  );
}

export default Page;



