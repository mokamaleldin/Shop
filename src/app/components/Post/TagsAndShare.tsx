import Image from "next/image"
import Link from "next/link"

const TagsAndShare = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <p className="font-medium">Tags </p>
                <hr className="border-t w-12 border-black" />
                <div className="flex gap-2 text-sm">
                    <div className="text-DarkGray">Fashion,</div>
                    <div className="text-DarkGray">Style  Season</div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <p className="font-medium ">Share </p>
                <hr className="border-t w-12 border-black" />
                <div className="flex gap-2 text-sm">
                    <Link href="https://linkedin.com" aria-label="LinkedIn">
                        <Image loading="lazy" src="/icons/LinkedIn.svg" alt="LinkedIn icon" width={20} height={20} />
                    </Link>
                    <Link href="https://facebook.com" aria-label="Facebook">
                        <Image loading="lazy" src="/icons/facebook.svg" alt="Facebook icon" width={10} height={10} />
                    </Link>
                    <Link href="https://instagram.com" aria-label="Instagram">
                        <Image loading="lazy" src="/icons/instgram.svg" alt="Instagram icon" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TagsAndShare