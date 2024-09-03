import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mx-20 my-10">
            <div className="mb-8 text-center">
                <hr className="border-t-2 border-Gray" />
            </div>
            <nav className="flex justify-between items-start">
                <div className="text-sm">
                    <div className="flex text-DarkGray gap-8 mb-8">
                        <Link href="/">CONTACT</Link>
                        <Link href="/">TERMS OF SERVICES</Link>
                        <Link href="/">SHIPPING AND RETURNS</Link>
                    </div>
                    <div>
                        <p>© 2024 mkee. <span className="text-DarkGray">Terms of use</span> and <Link href={"/Privacy"} className="text-DarkGray hover:text-black">privacy policy.</Link></p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <Link href="https://linkedin.com" aria-label="LinkedIn">
                        <Image src="/icons/LinkedIn.svg" alt="LinkedIn icon" width={20} height={20} />
                    </Link>
                    <Link href="https://facebook.com" aria-label="Facebook">
                        <Image src="/icons/facebook.svg" alt="Facebook icon" width={10} height={10} />
                    </Link>
                    <Link href="https://instagram.com" aria-label="Instagram">
                        <Image src="/icons/instgram.svg" alt="Instagram icon" width={20} height={20} />
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
