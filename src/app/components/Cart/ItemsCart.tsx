
import { TProduct } from "@/app/types/Product"
import Image from "next/image";
import DeleteItems from "./DeleteItems";
import { useDispatch, useSelector } from "react-redux";
import { CardAction } from "@/app/lib/store/features/cartSlice";
import { RootState } from "@/app/lib/store";

const ItemsCart = () => {
    const cart = useSelector((state: RootState) => state.card.items);

    const dispatch = useDispatch();
    const handleIncrement = (item: TProduct) => {
        dispatch(CardAction.addToCart(item));
    };

    const handleDecrement = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    };
    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.SKU} className="lg:grid grid-cols-3 gap-4 mb-4">
                        <Image loading="lazy" width={150} height={150} src={item.image} alt={item.name} />
                        <div className="flex flex-col gap-4">
                            <div className="font-">{item.name}</div>
                            <div className="text-accent">${item.price} USD</div>
                        </div>
                        <div className="flex gap-8">
                            <div className="bg-LightGray text-DarkGray flex w-fit h-fit gap-4 px-3 py-3 rounded-md">
                                <button onClick={() => handleDecrement(item.SKU)}>-</button>
                                <div>{item.quantity}</div>
                                <button onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <DeleteItems SKU={item.SKU} />
                        </div>

                    </div>
                ))
            }
        </>
    )
}
export default ItemsCart