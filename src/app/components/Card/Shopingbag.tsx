import { RootState } from "@/app/lib/store";
import { CardAction } from "@/app/lib/store/features/cartSlice";
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const Shopingbag = () => {
    const cart = useSelector((state: RootState) => state.card.items);

    const dispatch = useDispatch()
    const handleRemoveFromCart = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    }

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="mt-12 mb-4 mx-4 flex flex-col gap-4 overflow-hidden">
            <div className="text-lg ">Shopping bag</div>
            <div className="text-xs text-DarkGray">(Number) items</div>

            <div className="overflow-auto">
                <div>
                    <div className="text-DarkGray text-xs">
                        {cart.length > 1 ? `${cart.length} Items` : `${cart.length} Item`}
                    </div>
                    {cart.map((item) => (
                        <div key={item.SKU} className="flex items-start gap-4 mt-2 mb-4">
                            <Image width={120} height={120} src={item.image} alt={item.name} />
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between font-medium gap-8">
                                    <div>{item.name}</div>
                                    <button className="hover:text-red-700" onClick={() => handleRemoveFromCart(item.SKU)}>X</button>
                                </div>
                                <div className="text-accent">{item.price} USD</div>
                                <div className="text-sm justify-self-end text-DarkGray flex gap-2">
                                    <div>QTY:</div>
                                    <button>-</button>
                                    <div>1</div>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            <div className="flex flex-col gap-4 justify-end ">
                <hr className="border-t-2 border-Gray " />
                <div className="text-sm flex justify-between items-center">
                    <p>Subtotal {cart.length > 1 ? `${cart.length} Items` : `${cart.length} Item`}</p>
                    <p>${totalPrice}</p>
                </div>
                <Link href="/Cart">
                    <button className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                        VIEW CART
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Shopingbag