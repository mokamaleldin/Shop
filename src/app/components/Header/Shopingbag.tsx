import { RootState } from "@/app/lib/store";
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import DeleteItems from "../Cart/DeleteItems";
import { CardAction } from "@/app/lib/store/features/cartSlice";
import { TProduct } from "@/app/types/Product";

const Shopingbag = ({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
    const cart = useSelector((state: RootState) => state.card.items);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const dispatch = useDispatch();

    const handleIncrement = (item: TProduct) => {
        dispatch(CardAction.addToCart(item));
    };

    const handleDecrement = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    };

    return (
        <div className="mt-12 mb-4 mx-4 flex flex-col gap-4 overflow-hidden">
            <div className="text-lg ">Shopping bag</div>

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
                                    <DeleteItems SKU={item.SKU} />
                                </div>
                                <div className="text-accent">{item.price * item.quantity} USD</div>
                                <div className="text-sm justify-self-end text-DarkGray flex gap-2">
                                    <div>QTY:</div>
                                    <button onClick={() => handleDecrement(item.SKU)}>-</button>
                                    <div>{item.quantity}</div>
                                    <button onClick={() => handleIncrement(item)}>+</button>
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
                {cart.length > 0 &&
                <Link href="/Shopping-Card">
                        <button onClick={() => setOpen(false)} className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                        VIEW CART
                    </button>
                </Link>
                }
            </div>
        </div>
    )
}
export default Shopingbag