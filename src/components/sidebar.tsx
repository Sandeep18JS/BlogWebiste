'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { simplified } from '@/types/sidenav';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Sidebar = ({ blogdata, tutorialdata, gettingstarteddata }: { blogdata: simplified[], tutorialdata: simplified[], gettingstarteddata: simplified[] }) => {
    return (
        <div>
            <SidebarSection title="Getting Started" data={gettingstarteddata} path='' />
            <SidebarSection title="Blogs" data={blogdata} path="blogs" />
            <SidebarSection title="Tutorials" data={tutorialdata} path="tutorials" />
        </div>
    )
}
export default Sidebar

const SidebarSection = ({ title, data, path }: { title: string, data: simplified[], path: string }) => {
    const pathname = usePathname();

    const [toggle, setToggle] = useState(true)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <div className="w-full pr-6">
            <div onClick={handleClick} className='flex items-center hover:cursor-pointer'>
                <h4 className="mb-1 rounded-md pl-2 pr-1 py-1 text-base font-bold ">{title}</h4>
                {toggle ? <ChevronDown strokeWidth={1.5} size={20} /> : <ChevronRight strokeWidth={1.5} size={20} />}
            </div>
            {toggle && data.map((item) => (
                <div key={item._id} className="pb-3 pl-1">
                    <div className="grid grid-flow-row auto-rows-max text-sm text-gray-700 dark:text-gray-400">
                        <div>
                            <Link
                                href={`/${path ? `${path}/` : ''}${item.slug === '/' ? '' : item.slug}`} className="group flex w-full items-center rounded-md border border-transparent px-2 py-1">
                                <span className={cn(
                                    "hover:text-[#0FA4AF]",
                                    pathname === `/${item.slug === '/' ? '' : item.slug}` || pathname === `/${path}/${item.slug}` ? 'text-[#0FA4AF]' : '')}>{item.title}</span>
                                {item.status ? <span className='ml-2 rounded-md bg-[#0FA4AF] border border-[#0FA4AF]  dark:bg-emerald-300/10 dark:text-[#0FA4AF] px-1.5 py-0.5 text-xs leading-none'>{item.status}</span> : null}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};