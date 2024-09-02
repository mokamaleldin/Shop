import { CardAction } from "@/app/lib/store/features/cartSlice";
import { useDispatch } from "react-redux";

const DeleteItems = ({ SKU }: { SKU: string }) => {
    const dispatch = useDispatch()
    const handleRemoveFromCart = (SKU: string) => {
        dispatch(CardAction.removeFromCart(SKU));
    }
    return (
        <div className="hover:text-red-700">
            <button onClick={() => handleRemoveFromCart(SKU)}>X</button>
        </div>
    )
}
export default DeleteItems