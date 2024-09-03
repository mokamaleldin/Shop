"use client";
import ItemsCart from "@/app/components/Cart/ItemsCart";
import TotalPrice from "@/app/components/Cart/TotalPrice";

const page = () => {
    return (
        <div className="mx-20">
            <h2 className="text-4xl font-medium text-center">Shopping Cart</h2>

            <div className="flex justify-between items-start my-8 ">
                <div className="w-1/2">
                    <ItemsCart/>
                </div>

                <div className="w-1/2 ">
                    <TotalPrice />
                </div>

            </div>
        </div>
    )
}
export default page