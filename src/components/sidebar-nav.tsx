import { cn } from "@/lib/utils"
import { client } from "@/lib/sanity"
import Link from "next/link";

export const revalidate = 30;


async function getBlogData() {
    const query = `*[_type == "blog"][0...4] | order(_createdAt asc){
      _id,
      title,
    "slug":slug.current ,
    }`;
    const blogdata = await client.fetch(query)
    return blogdata
}

async function getTutorialData() {
    const query = `*[_type == "tutorial"][0...4] | order(_createdAt asc){
      _id,
      title,
    "slug":slug.current ,
    }`;
    const tutorialdata = await client.fetch(query)
    return tutorialdata
}


export interface simplifiedBlog {
    _id: string;
    title: string;
    slug: string;
    disabled?: boolean;
    external?: boolean;
}

export const SidebarNav = async () => {
    const blogdata: simplifiedBlog[] = await getBlogData();
    const tutorialdata: simplifiedBlog[] = await getTutorialData();

    return (
        <div>

            <div className="w-full">
                <h4 className="mb-1 rounded-md px-2 py-1 text-base font-bold">
                    Blogs
                </h4>
                {blogdata.map((link) => (
                    <div key={link._id} className={cn("pb-3 pl-1")}>

                        <div className="grid grid-flow-row auto-rows-max text-sm text-gray-700 dark:text-white">
                            <Link
                                href={`/blogs/${link.slug}`}
                                className={cn(
                                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                                    link.disabled && "cursor-not-allowed opacity-60"

                                )}
                                target={link.external ? "_blank" : ""}
                                rel={link.external ? "noreferrer" : ""}
                            >
                                {link.title}
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-full">
                <h4 className="mb-1 rounded-md px-2 py-1 text-base font-bold">
                    Tutorials
                </h4>
                {tutorialdata.map((link) => (
                    <div key={link._id} className={cn("pb-3 pl-1")}>

                        <div className="grid grid-flow-row auto-rows-max text-sm text-gray-700  dark:text-white">
                            <Link
                                href={`/tutorials/${link.slug}`}
                                className={cn(
                                    "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                                    link.disabled && "cursor-not-allowed opacity-60"

                                )}
                                target={link.external ? "_blank" : ""}
                                rel={link.external ? "noreferrer" : ""}
                            >
                                {link.title}
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div >
    )
}
