'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import ShopSide from './ShopSide'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleOpenShopSide = () => {
        setOpen(!open)
    }

    return (
        <header className="flex justify-between items-center mx-20 my-10">
            <div className="flex items-center">
                <Link href="/">
                    <Image loading="eager" src="/Header/logo.svg" alt="shop logo" width={100} height={100} />
                </Link>
            </div>
            <nav className="flex items-center gap-8 text-sm">
                <div className="flex gap-8">
                    <Link href="/Shop">Shop</Link>
                    <Link href="/Blog">Blog</Link>
                    <Link href="/About">Our Story</Link>
                </div>
                <div className="text-DarkGray">|</div>
                <div className="flex gap-8">
                    <button onClick={handleOpenShopSide} >
                        <Image loading="eager" src="/icons/shopping.svg" alt="Shopping cart icon" width={20} height={20} />
                    </button>
                    <Link href="/">
                        <Image loading="eager" src="/icons/search.svg" alt="Search icon" width={20} height={20} />
                    </Link>
                </div>
            </nav>
            {open && <ShopSide open={open} setOpen={setOpen} />}
        </header>
    )
}

export default Header
