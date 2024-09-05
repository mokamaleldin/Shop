import { TProduct } from "@/app/types/Product"
import Image from "next/image"
import ProductShareIcon from "./ProductShareIcon"
import AddToCard from "./AddToCard"

export const ProductDetails = ({ product }: { product: TProduct }) => {
    return (
        <div className="flex md:flex-row flex-col md:justify-start justify-between 
        ">
            <div className="md:w-1/2 ">
                <Image loading="eager" width={500} height={500} src={product.image} alt={product.name} />
            </div>
            <div className="md:w-1/2">
                <div className="flex flex-col md:gap-8 gap-4">
                    <p className="md:text-xl text-lg text-black md:mt-0 mt-4">{product.name}</p>
                    <p className="md:text-lg text-base text-accent">${product.price},00</p>
                    <p className="text-DarkGray md:text-base text-sm">{product.description}</p>
                </div>
                <AddToCard product={product} />
                
                <ProductShareIcon />
                <div className="md:py-8 py-4 md:block flex gap-4 justify-center">
                    <div className="font-medium">SKU : <span className="md:ml-3 ml-1 font-normal text-DarkGray">{product.SKU}</span></div>
                    <div className="font-medium">Categories: : <span className="md:ml-3 ml-1 font-normal text-DarkGray">{product.category}</span></div>
                </div>

            </div>
        </div >
    )
}