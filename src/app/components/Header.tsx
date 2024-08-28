import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="flex justify-between items-center mx-20 my-10">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/Header/logo.svg" alt="shop logo" width={100} height={100} />
                </Link>
            </div>
            <nav className="flex items-center gap-8 text-sm">
                <div className="flex gap-8">
                    <Link href="/">Shop</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">Our Story</Link>
                </div>
                <div className="text-DarkGray">|</div>
                <div className="flex gap-8">
                    <Link href="/">
                        <Image src="/icons/shopping.svg" alt="Shopping cart icon" width={20} height={20} />
                    </Link>
                    <Link href="/">
                        <Image src="/icons/search.svg" alt="Search icon" width={20} height={20} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
