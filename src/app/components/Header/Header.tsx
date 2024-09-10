'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import ShopSide from './ShopSide'
import MobileMenu from './MobileMenu'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpenShopSide = () => {
        setOpen(!open)
    }
    const pathname = usePathname();
    return (
        <header className="flex justify-between items-center md:mx-20 mx-5 my-10">
            <div className="flex items-center">
                <Link rel="preload" href="/">
                    <Image loading="eager" src="/Header/logo.svg" alt="shop logo" width={100} height={100} />
                </Link>
            </div>
            <nav className="flex items-center gap-8 text-sm">

                <div className="hidden md:flex gap-8">
                    <Link className={pathname === '/Shop' ? 'underline underline-offset-8' : ''} rel="preload" href="/Shop">Shop</Link>
                    <Link className={pathname === '/Blog' ? 'underline underline-offset-8' : ''} rel="preload" href="/Blog">Blog</Link>
                    <Link className={pathname === '/About' ? 'underline underline-offset-8' : ''} rel="preload" href="/About">Our Story</Link>
                </div>

                <MobileMenu />
                <div className="hidden md:flex text-DarkGray">|</div>

                <div className="flex gap-8">
                    <button onClick={handleOpenShopSide} >
                        <Image loading="eager" src="/icons/shopping.svg" alt="Shopping cart icon" width={20} height={20} />
                    </button>
                    <Link rel="preload" href="/" className='hidden md:flex'>
                        <Image loading="eager" src="/icons/search.svg" alt="Search icon" width={20} height={20} />
                    </Link>
                </div>
            </nav>
            {open && <ShopSide open={open} setOpen={setOpen} />}
        </header>
    )
}

export default Header
