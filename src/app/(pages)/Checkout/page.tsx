"use client"
import Coupon from "@/app/components/Checkout/Coupon"
import DillingDetails from "@/app/components/Checkout/DillingDetails"
import YourOrder from "@/app/components/Checkout/YourOrder"

const page = () => {
    return (
        <div className="mx-20">
            <h2 className="text-4xl font-medium text-center ">Checkout</h2>
            <Coupon />
            <div className="flex justify-center items-start gap-8">
                <div className="w-1/2">
                    <DillingDetails />
                </div>
                <div className="w-1/2">
                    <YourOrder />
                </div>
            </div>
        </div>
    )
}
export default page