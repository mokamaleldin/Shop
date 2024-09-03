import { driveFreeThreshold } from "@/app/lib/config/config"
import Link from "next/link"

const TotalPrice = ({ totalPrice, finalPrice }: { totalPrice: number, finalPrice: number }) => {
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