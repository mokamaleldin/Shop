import { TProduct } from "@/app/types/Product"
import Image from "next/image"
import Link from "next/link"
import ProductShareIcon from "./ProductShareIcon"

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

                <div className="flex items-center gap-10 my-8">
                    <div className="bg-LightGray text-DarkGray flex gap-6 px-8 py-3 rounded-md">
                        <button>-</button>
                        <div>1</div>
                        <button>+</button>
                    </div>
                    <div>
                        <button className="border px-16 py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                            ADD TO CART
                        </button>
                    </div>
                </div>

                <div className="flex gap-8 text-Gray items-center">
                    <Link href="https://love.com" aria-label="LinkedIn">
                        <Image src="/icons/love.svg" alt="LinkedIn icon" width={20} height={20} />
                    </Link>
                    <div >|</div>
                    <ProductShareIcon />
                </div>


                <div> </div>

            </div>
        </div >
    )
}