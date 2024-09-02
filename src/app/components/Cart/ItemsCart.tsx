import { CardAction } from "@/app/lib/store/features/cartSlice";
import { TProduct } from "@/app/types/Product"
import Image from "next/image";
import { useDispatch } from "react-redux";

const ItemsCart = ({ cart }: { cart: TProduct[] }) => {
    const dispatch = useDispatch()
    const handleRemoveFromCart = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    }
    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.SKU} className="flex items-start gap-10 mt-2 mb-4">
                        <Image width={150} height={150} src={item.image} alt={item.name} />
                        <div className="flex flex-col gap-4">
                            <div className="font-">{item.name}</div>
                            <div className="text-accent">{item.price} USD</div>
                        </div>
                        <div className="bg-LightGray text-DarkGray flex gap-4 px-3 py-3 rounded-md">
                            <button>-</button>
                            <div>1</div>
                            <button>+</button>
                        </div>
                        <div className="hover:text-red-700">
                            <button onClick={() => handleRemoveFromCart(item.SKU)}>X</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default ItemsCart