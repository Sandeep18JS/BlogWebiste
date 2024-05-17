import React from 'react'

type Props = {}
const Navbar = (props: Props) => {
    return (
        <main className='fixed w-full top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
            <div className="bg-white  flex items-center justify-center px-4 py-4 ">
                <h1 className="text-2xl text-center text-black font-bold ">Sandeep's Blog</h1>
            </div>
        </main>
    )
}

export default Navbar