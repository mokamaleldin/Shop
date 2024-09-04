"use client";
import ItemsCart from "@/app/components/Cart/ItemsCart";
import TotalPrice from "@/app/components/Cart/TotalPrice";

const page = () => {
    return (
        <div className="md:mx-20 mx-5">
            <h2 className="md:text-4xl text-2xl font-medium text-center">Shopping Cart</h2>

            <div className="md:flex md:justify-between justify-center items-start my-8 ">
                <div className="md:w-1/2 ">
                    <ItemsCart/>
                </div>

                <div className="md:w-1/2 ">
                    <TotalPrice />
                </div>

            </div>
        </div>
    )
}
export default page