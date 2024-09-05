import Image from "next/image"
import Link from "next/link"

const ProductShareIcon = () => {
    return (
        <div className="flex gap-8  md:py-8 text-Gray items-center md:justify-normal justify-center">
            <Link rel="preload" href="https://love.com" aria-label="LinkedIn">
                <Image loading="eager" src="/icons/love.svg" alt="LinkedIn icon" width={20} height={20} />
            </Link>
            <div className="font-medium">|</div>
            <Link rel="preload" href="https://gmail.com" aria-label="LinkedIn">
                <Image loading="eager" src="/icons/gmail.svg" alt="LinkedIn icon" width={20} height={20} />
            </Link>
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
    )
}
export default ProductShareIcon