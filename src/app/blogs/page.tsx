import { client } from '@/lib/sanity';
import React from 'react';
import ContentSection from '@/components/ContentSection';

export const revalidate = 30;

async function getContentData() {
    const query = `*[_type == "blog"] | order(_createdAt asc){
    _id,
    title,
    description,
    publishedAt,
    "slug":slug.current,
    "Url":urls[0].asset->url,
  }`;
    return await client.fetch(query);
}

const Page = async () => {
    const blogdata = await getContentData();

    return (
        <div className='my-16 space-y-4 '>
            <h1 className='text-3xl  font-bold px-3 dark:text-[#ebebeb]'>All Blogs</h1>
            <ContentSection data={blogdata} path="blogs" />
        </div>
    );
}

export default Page;



