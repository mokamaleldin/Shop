import { RootState } from "@/app/lib/store";
import { CardAction } from "@/app/lib/store/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const DecAndInc = () => {
    const quantity = useSelector((state: RootState) => state.card.quantity);
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(CardAction.Increment());
    }

    const handleDecrement = () => {
        dispatch(CardAction.Decrement());
    }
    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <div>{quantity}</div>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}
export default DecAndInc;