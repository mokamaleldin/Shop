import { additionalCost, driveFreeThreshold } from "@/app/lib/config/config"
import { RootState } from "@/app/lib/store";
import Link from "next/link"
import { useSelector } from "react-redux";

const TotalPrice = () => {
    const cart = useSelector((state: RootState) => state.card.items);

    // Calculate the total price of the cart
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    // Calculate the final price of the cart
    const finalPrice = totalPrice < driveFreeThreshold ? totalPrice + additionalCost : totalPrice;
    
    return (
        <>
            <h2 className="text-2xl font-medium mb-4">Cart Totals</h2>
            <div className="text-lg mb-4">
                {totalPrice < driveFreeThreshold ? (
                    <div >Spend ${driveFreeThreshold - totalPrice} more to get a free drive. An additional $25 will be added to your total.</div>
                ) : (
                    <div className="text-green-500">Congratulations! Your drive is free.</div>
                )}
            </div>
            <hr className="border-t-2 border-Gray mb-4" />
            <div className="flex justify-between text-lg font-medium mb-4">
                <div>Total</div>
                <div>${finalPrice} USD</div>
            </div>
            <Link href={'/Checkout '}>
                <button className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white">
                    PROCEED TO CHECKOUT
                </button>
            </Link>
        </>
    )
}
export default TotalPrice