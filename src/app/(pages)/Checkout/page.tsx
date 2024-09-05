"use client"
import Coupon from "@/app/components/Checkout/Coupon"
import DillingDetails from "@/app/components/Checkout/DillingDetails"
import YourOrder from "@/app/components/Checkout/YourOrder"

const page = () => {
    return (
        <div className="md:mx-20 mx-5-20 mx-5">
            <h2 className="md:text-4xl text-2xl font-medium text-center ">Checkout</h2>
            <Coupon />
            <div className="md:flex justify-center items-start gap-8">
                <div className="md:w-1/2">
                    <DillingDetails />
                </div>
                <div className="md:w-1/2">
                    <YourOrder />
                </div>
            </div>
        </div>
    )
}
export default page