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
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin"?"underline":""}`} href="/admin">Home</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/user"?"underline":""}`} href="/admin/user">User</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/category"?"underline":""}`} href="/admin/category">Kategory</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/content"?"underline":""}`} href="/admin/content">Content</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/comment"?"underline":""}`} href="/admin/comment">Comment</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/tag"?"underline":""}`} href="/admin/tag">Tag</Link>
            </p>
            <p>
                <Link className={`p-3 border border-red-700 rounded-lg ${patname === "/admin/ad-placement"?"underline":""}`} href="/admin/ad-placement">Ad Placement</Link>
            </p>
            <button className={`p-3 bg-cyan-600 hover:bg-cyan-800 text-white rounded-lg shadow-lg transition`} type='button' onClick={()=> router.push('/admin/auth/login')}>
                Login
            </button>
        </div>
    </div>
  )
}

export default Header