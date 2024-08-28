import { TProduct } from "@/app/types/Product"
import Image from "next/image"

export const Hero = ({ product }: { product: TProduct }) => {
    return (
        <div className="flex justify-start">
            <div className="w-1/2">
                <Image width={500} height={500} src={product.image} alt={product.name} />
            </div>
            <div className=" w-1/2">
                <p className="text-xl text-black">{product.name}</p>
                <p className="my-8 text-lg text-accent">${product.price},00</p>
                <p className="text-DarkGray my-8">{product.description}</p>
            </div>
        </div >
    )
}