import BlogOrTutorial from '@/components/BlogOrTutorial';
import { client } from '@/lib/sanity';
import React from 'react'

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current=='${slug}']{
        _id,
        title,
        status,
        description,
          "slug":slug.current ,
          "imageUrl":images[0].asset->url,
          body,
          "h3Texts": body[style == "h3"] {
            "text": children[0].text,
            "key": _key
          }
    
      }`;
  const data = await client.fetch(query)
  return data
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug)
  return (
    <BlogOrTutorial data={data} />
  )
}

export default page

