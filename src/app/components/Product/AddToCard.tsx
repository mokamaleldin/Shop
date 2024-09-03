"use client"
import { RootState } from "@/app/lib/store"
import { CardAction } from "@/app/lib/store/features/cartSlice"
import { TProduct } from "@/app/types/Product"
import { useDispatch, useSelector } from "react-redux"

const AddToCard = ({ product }: { product: TProduct }) => {

    const cartItem = useSelector((state: RootState) => state.card.items.find(item => item.SKU === product.SKU));
    const productQuantity = cartItem ? cartItem.quantity : 0;

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(CardAction.addToCart(product));
    };

    const handleIncrement = () => {
        dispatch(CardAction.addToCart(product));
    };

    const handleDecrement = () => {
        if (productQuantity > 0) {
            dispatch(CardAction.removeFromCart(product.SKU));
        }
    };

    return (
        <div className="flex items-center gap-10 py-8">
            <div className="bg-LightGray text-DarkGray flex gap-6 px-8 py-3 rounded-md">
                <button onClick={handleDecrement}>-</button>
                <div>{productQuantity}</div>
                <button onClick={handleIncrement}>+</button>
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