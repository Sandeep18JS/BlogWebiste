import { client } from '@/lib/sanity';
import React from 'react';
import ContentSection from '@/components/ContentSection';

export const revalidate = 30;

async function getContentData() {
    const query = `*[_type == "tutorial"]| order(_createdAt asc){
    _id,
    title,
    description,
    "slug":slug.current,
    "imageUrl":images[0].asset->url,
  }`;
    return await client.fetch(query);
}

const Page = async () => {
    const tutorialdata = await getContentData();

    return (
        <div className='my-16 space-y-4 '>
            <h1 className='font-semibold text-3xl px-3 dark:text-[#f0f0f0]'>All Tutorials</h1>
            <ContentSection data={tutorialdata} path="tutorials" />
        </div>
    );
}

export default Page;



