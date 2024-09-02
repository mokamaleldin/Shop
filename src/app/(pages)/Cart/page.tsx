"use client";
import ItemsCart from "@/app/components/Cart/ItemsCart";
import TotalPrice from "@/app/components/Cart/TotalPrice";
import { additionalCost, driveFreeThreshold } from "@/app/lib/config/config";
import { RootState } from "@/app/lib/store";
import { useSelector } from "react-redux";

const page = () => {
    const cart = useSelector((state: RootState) => state.card.items);
    
    // Calculate the total price of the cart
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    // Calculate the final price of the cart
    const finalPrice = totalPrice < driveFreeThreshold ? totalPrice + additionalCost : totalPrice;

    return (
        <div className="mx-20">
            <h2 className="text-4xl font-medium text-center">Shopping Cart</h2>

            <div className="flex justify-between items-start my-8 ">
                <div className="w-1/2">
                    <ItemsCart cart={cart} />
                </div>

                <div className="w-1/2 ">
                    <TotalPrice totalPrice={totalPrice} finalPrice={finalPrice} />
                </div>

            </div>
        </div>
    )
}
export default page