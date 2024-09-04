import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="md:mx-20 mx-5-20 mx-5 my-10">
            <div className="mb-8 text-center">
                <hr className="border-t-2 border-Gray" />
            </div>
            <nav className="flex justify-between items-start">
                <div className="text-sm">
                    <div className="flex text-DarkGray gap-8 mb-8">
                        <Link rel="preload" href="/ContactUs">CONTACT</Link>
                        <Link rel="preload" href="/">TERMS OF SERVICES</Link>
                        <Link rel="preload" href="/">SHIPPING AND RETURNS</Link>
                    </div>
                    <div>
                        <p>© 2024 mkee. <span className="text-DarkGray">Terms of use</span> and <Link rel="preload" href={"/Privacy"} className="text-DarkGray hover:text-black">privacy policy.</Link></p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <Link rel="preload" href="https://linkedin.com" aria-label="LinkedIn">
                        <Image loading="eager" src="/icons/LinkedIn.svg" alt="LinkedIn icon" width={20} height={20} />
                    </Link>
                    <Link rel="preload" href="https://facebook.com" aria-label="Facebook">
                        <Image loading="eager" src="/icons/facebook.svg" alt="Facebook icon" width={10} height={10} />
                    </Link>
                    <Link rel="preload" href="https://instagram.com" aria-label="Instagram">
                        <Image loading="eager" src="/icons/instgram.svg" alt="Instagram icon" width={20} height={20} />
                    </Link>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
