import Image from "next/image"
import { useDispatch } from "react-redux"
import DeleteItems from "../Cart/DeleteItems";
import { CardAction } from "@/app/lib/store/features/cartSlice";
import { TProduct } from "@/app/types/Product";

const CardDetails = ({ cart }: { cart: TProduct[] }) => {
    const dispatch = useDispatch();

    const handleIncrement = (item: TProduct) => {
        dispatch(CardAction.addToCart(item));
    };

    const handleDecrement = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    };
    return (
        <div className="overflow-auto">
            <div>
                <div className="text-DarkGray text-xs">
                    {cart.length > 1 ? `${cart.length} Items` : `${cart.length} Item`}
                </div>
                {cart.map((item: TProduct) => (
                    <div key={item.SKU} className="flex items-start gap-4 mt-2 mb-4">
                        <Image loading="eager" width={120} height={120} src={item.image} alt={item.name} />
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
    )
}
export default CardDetails