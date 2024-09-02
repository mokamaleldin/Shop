"use client"
import { CardAction } from "@/app/lib/store/features/cartSlice"
import { TProduct } from "@/app/types/Product"
import { useDispatch } from "react-redux"
import DecAndInc from "../Inputs/DecAndInc"

const AddToCard = ({ product }: { product: TProduct }) => {
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(CardAction.addToCart(product));
    };

   

    return (
        <div className="flex items-center gap-10 py-8">
            <div className="bg-LightGray text-DarkGray flex gap-6 px-8 py-3 rounded-md">
                <DecAndInc  />
            </div>
            <div>
                <button onClick={handleAddToCart} className="border px-16 py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
export default AddToCard