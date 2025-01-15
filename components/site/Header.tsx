'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
    const patname = usePathname();
    const router = useRouter();
  return (
    <div className='flex justify-between shadow-lg mb-1 items-center'>
        <div className='ml-5'>
            logo
        </div>
        <div className='flex items-center gap-9 m-5'>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/"?"underline":""}`} href="/">Home</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/category"?"underline":""}`} href="/category">Kategory</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/blog"?"underline":""}`} href="/blog">Blog</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/about"?"underline":""}`} href="/about">About</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/contact"?"underline":""}`} href="/contact">Contact</Link>
            </p>
            <button className={`p-3 bg-cyan-600 hover:bg-cyan-800 text-white rounded-lg shadow-lg transition`} type='button' onClick={()=> router.push('/auth/login')}>
                Login
            </button>
        </div>
    </div>
  )
}

export default Header