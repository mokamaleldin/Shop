import { TProduct } from "@/app/types/Product"
import Image from "next/image"
import Link from "next/link";

const Card = ({ product }: { product: TProduct }) => {
    return (
        <Link href={`/Product/${product.slug}`} className=" mb-16">
            <div className="relative group w-fit">
                <Image src={product.image} alt={product.name} width={350} height={350} className="block" />
                <button className="absolute bottom-0 left-0 w-full py-3 duration-150  text-black bg-opacity-50 bg-white opacity-0 hover:duration-150 group-hover:opacity-100 hover:text-white hover:bg-black">
                    ADD TO CART
                </button>
            </div>

            <p className="my-2 text-lg text-black">{product.name}</p>
            <p className="my-2 text-accent">${product.price},00</p>
        </Link>
    )
}
export default Card 