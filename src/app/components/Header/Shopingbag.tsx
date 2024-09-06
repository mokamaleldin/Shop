import { RootState } from "@/app/lib/store";
import { useSelector } from "react-redux"
import CardDetails from "./CardDetails";
import ViewCart from "./ViewCart";

const Shopingbag = ({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
    const cart = useSelector((state: RootState) => state.card.items);
    return (
        <div className="mt-12 mb-4 mx-4 flex flex-col gap-4 overflow-hidden">
            <div className="text-lg ">Shopping bag</div>
            {cart.length > 0 &&

                <>
                <CardDetails cart={cart} />
                <ViewCart setOpen={setOpen} cart={cart} />
                </>
            }
            {cart.length === 0 && <div className="text-lg text-center text-accent font-bold">Your cart is empty</div>}
        </div>
    )
}
export default Shopingbag