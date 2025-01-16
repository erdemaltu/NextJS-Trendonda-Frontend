'use client'

import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import { usePathname, useRouter } from 'next/navigation'
import { Pacifico } from "next/font/google";

const pacifiko = Pacifico({subsets: ["cyrillic"], weight: "400"});

const Header = () => {
    const patname = usePathname();
    const router = useRouter();
  return (
    <>
        <Head>
            <title>Trendonda</title>
            <meta name="description" content="Discover and explore trending topics worldwide." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-mycolor p-4">
          <div className="container mx-auto flex flex-row justify-between items-center">
            <div className={`text-white text-lg md:text-xl font-semibold ${pacifiko.className}`}>
            Trendonda
            </div>

            <div className="hidden md:block md:w-1/3 lg:w-1/2">
              <input type="text" className="w-full focus:outline-none pl-2"/>
            </div>
            
            <div className="text-white text-lg font-semibold">
              login
            </div>
          </div>
        </header>
        <div className="flex items-center p-3 space-x-8 justify-center bg-mycolor2 border-b-2 border-b-mycolor4 shadow-2xl">
          <Link href="/" className={`text-white hover:text-black ${patname === "/"?"underline":""}`}>Anasafya</Link>
          <Link href="/category" className={`text-white hover:text-black ${patname === "/category"?"underline":""}`}>Kategori</Link>
          <Link href="/blog" className={`text-white hover:text-black ${patname === "/blog"?"underline":""}`}>Blog</Link>
          <Link href="/about" className={`text-white hover:text-black ${patname === "/about"?"underline":""}`}>Hakkımızda</Link>
          <Link href="/contact" className={`text-white hover:text-black ${patname === "/contact"?"underline":""}`}>İletişim</Link>
        </div>
    </>
  )
}

export default Header