'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

type Props = {}
const Navbar = (props: Props) => {
    return (
        <main className='fixed w-full top-0 z-50 border-b border-border/90 bg-[#f7f7f7] dark:bg-[#101014]'>
            <div className=" flex items-center justify-between px-8 py-4">
                <Link href='/'>
                    <Image src='/logo.svg' alt='logo' width={100} height={100} className='w-[30px] h-auto' ></Image>
                </Link>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </main>
    )
}

export default Navbar