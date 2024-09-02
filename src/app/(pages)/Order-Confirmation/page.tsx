"use client"
import OrderSummary from "@/app/components/Checkout/OrderSummary"
import OrderDetails from "@/app/components/Order-Confirmation/OrderDetails"

const page = () => {
    return (
        <div className="mx-20 ">
            <h2 className="text-4xl font-medium text-center "> Order Confirmation</h2>


            <div className="flex justify-center items-start gap-16 my-16" >
                <div className="w-1/2">
                    <h2 className="text-2xl font-medium  ">Order Details</h2>
                    <div className="my-4">
                        <OrderDetails />
                    </div>
                </div>

                <div className="w-1/2">
                    <h2 className="text-2xl font-medium  ">ORDER Summary</h2>
                    <div className=" my-4 px-16 py-8 font-medium text-sm  bg-LightGray">
                        <OrderSummary />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default page