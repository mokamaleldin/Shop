import { TProduct } from "@/app/types/Product"
import Image from "next/image"
import Link from "next/link"
import ProductShareIcon from "./ProductShareIcon"
import AddToCard from "./AddToCard"

export const ProductDetails = ({ product }: { product: TProduct }) => {
    return (
        <div className="flex justify-start">

            <div className="w-1/2 ">
                <Image width={500} height={500} src={product.image} alt={product.name} />
            </div>

            <div className=" w-1/2">
                <div>
                    <p className="text-xl text-black">{product.name}</p>
                    <p className="my-8 text-lg text-accent">${product.price},00</p>
                    <p className="text-DarkGray my-8">{product.description}</p>
                </div>
                <AddToCard />
                <ProductShareIcon />
                <div className="py-8 ">
                    <div className="font-medium">SKU : <span className="ml-3 font-normal text-DarkGray">{product.SKU}</span></div>
                    <div className="font-medium">Categories: : <span className="ml-3 font-normal text-DarkGray">{product.category}</span></div>
                </div>

            </div>
        </div >
    )
}