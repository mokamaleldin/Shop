import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen)
    }

    const closeDropdown = () => {
        setDropdownOpen(false)
    }
    return (
        <>
            {!isDropdownOpen && (
                <div className="md:hidden space-y-2 cursor-pointer" onClick={toggleDropdown}>
                    <span className="block h-0.5 w-5 bg-black"></span>
                    <span className="block h-0.5 w-5 bg-black"></span>
                </div>
            )}

            {isDropdownOpen && (
                <div className="md:hidden cursor-pointer" onClick={toggleDropdown}>
                    <svg
                        className="h-5 w-5 font-extralight text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            )}

            {isDropdownOpen && (
                <div id="multi-dropdown" className="absolute top-16 right-5 z-10 duration-75">
                    <div className="flex flex-col gap-4 bg-accent text-LightGray rounded-md px-8 py-4 mr-12">
                        <Link rel="preload" href="/Shop" onClick={closeDropdown}>Shop</Link>
                        <Link rel="preload" href="/Blog" onClick={closeDropdown}>Blog</Link>
                        <Link rel="preload" href="/About" onClick={closeDropdown}>Our Story</Link>
                    </div>
                </div>
            )}
        </>
    )
}
export default MobileMenu