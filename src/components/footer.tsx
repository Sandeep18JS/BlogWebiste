import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
    return (
        <main className='border-t mt-16'>
            <div className='w-full z-50 bg-[#f7f7f7] dark:bg-[#101014] p-10 space-y-8' >
                <h1 className="text-4xl text-center font-extrabold">Let's Connect</h1>
                <div className='flex justify-center '>
                    <Link href="mailto:sandeepvemula408@gmail.com" className='border border-border/90 rounded-lg px-10 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black  '>Email</Link>
                </div>
                <div className='border-t max-w-3xl mx-auto'></div>
                <div className='flex justify-center items-center gap-4'>
                    <Link href="https://twitter.com/Sandeep_3Dev/" target="_blank" rel="noreferrer">
                        <FaTwitter className='w-[35px] h-[35px] border border-border/90 rounded-full p-1' />
                    </Link>
                    <Link href="https://github.com/Sandeep18JS" target="_blank" rel="noreferrer">
                        <FaGithub className='w-[35px] h-[35px] border border-border/90 rounded-full p-1' />
                    </Link>

                    <Link href="https://www.instagram.com/sandeep_3dev/#" target="_blank" rel="noreferrer">
                        <FaInstagram className='w-[35px] h-[35px] border border-border/90 rounded-full p-1' />
                    </Link>

                </div>
            </div>
            <div className='w-full z-50 border-t border-border/90 bg-[#f7f7f7] dark:bg-[#101014] p-2'>
                <h1 className="text-sm text-center font-thin">Copyright 2023 © Sandeep </h1>
            </div>
        </main>

    )
}

export default Footer