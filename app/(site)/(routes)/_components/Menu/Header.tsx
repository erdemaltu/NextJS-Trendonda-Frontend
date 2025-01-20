import { ModeToggle } from '@/components/ModeToggle'
import { User2Icon } from 'lucide-react'
import { Pacifico } from 'next/font/google'
import React from 'react'
import NavMenu from './NavMenu'
import SearchBox from './SearchBox';
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const pacifiko = Pacifico({subsets:["cyrillic"], weight:"400"})

const Header = () => {
  return (
    <div className='mx-auto bgone shadow-md'>
        <div className='container flex flex-row items-center
         justify-between'>
            <div>
                <h2 className={`${pacifiko.className} text-xl`}>Trendonda</h2>
            </div>
            <div>
                <NavMenu/>
            </div>
            <div className='flex flex-row items-center space-x-3'>
                <SearchBox/>
                <Link href="/login">
                    <User2Icon/>
                </Link>
                <ModeToggle/>
                <MobileMenu/>
            </div>
        </div>
    </div>
  )
}

export default Header