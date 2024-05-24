import { client } from "@/lib/sanity"
import Sidebar from "./sidebar";

export const revalidate = 30;

async function getContentData(contentType: string) {
  const query = `*[_type == "${contentType}"] | order(_createdAt asc){
      _id,
      title,
    "slug":slug.current ,
    }`;
  const contentData = await client.fetch(query)
  return contentData;
}

export const SidebarNav = async () => {
  const blogdata = await getContentData('blog');
  const tutorialdata = await getContentData('tutorial');
  return (
    <Sidebar blogdata={blogdata} tutorialdata={tutorialdata} />
  )
}
