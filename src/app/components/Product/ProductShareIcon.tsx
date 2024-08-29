import Image from "next/image"
import Link from "next/link"

const ProductShareIcon = () => {
    return (
        <>
            <Link href="https://gmail.com" aria-label="LinkedIn">
                <Image src="/icons/gmail.svg" alt="LinkedIn icon" width={20} height={20} />
            </Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">
                <Image src="/icons/LinkedIn.svg" alt="LinkedIn icon" width={20} height={20} />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
                <Image src="/icons/facebook.svg" alt="Facebook icon" width={10} height={10} />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
                <Image src="/icons/instgram.svg" alt="Instagram icon" width={20} height={20} />
            </Link>
        </>
    )
}
export default ProductShareIcon