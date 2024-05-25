'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import { simplified } from '@/types/sidenav';

const Sidebar = ({ blogdata, tutorialdata }: { blogdata: simplified[], tutorialdata: simplified[] }) => {
    return (
        <div>
            <SidebarSection title="Blogs" data={blogdata} path="blogs" />
            <SidebarSection title="Tutorials" data={tutorialdata} path="tutorials" />
        </div>
    )
}
export default Sidebar

const SidebarSection = ({ title, data, path }: { title: string, data: simplified[], path: string }) => {
    const pathname = usePathname();
    return (
        <div className="w-full">
            <h4 className="mb-1 rounded-md px-2 py-1 text-base font-bold">{title}</h4>
            {data.map((item) => (
                <div key={item._id} className="pb-3 pl-1">
                    <div className="grid grid-flow-row auto-rows-max text-sm text-gray-700 dark:text-gray-400">
                        <Link
                            href={`/${path}/${item.slug}`}
                            className={cn(
                                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:text-[#0FA4AF]",
                                pathname === `/${path}/${item.slug}` ? 'text-[#0FA4AF]' : ''
                            )}
                        >
                            {item.title}<span className='ml-2 rounded-md bg-[#0FA4AF] border border-[#0FA4AF]  dark:bg-emerald-300/10 dark:text-[#0FA4AF] px-1.5 py-0.5 text-xs leading-none'>New</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};