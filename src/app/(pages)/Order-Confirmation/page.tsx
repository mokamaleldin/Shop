"use client"
import OrderSummary from "@/app/components/Checkout/OrderSummary"
import OrderDetails from "@/app/components/Order-Confirmation/OrderDetails"
import PDFButton from "@/app/components/PDF/PDFButton"

const page = () => {
    return (
        <div className="md:mx-20 mx-5 ">
            <h2 className="md:text-4xl text-2xl font-medium text-center "> Order Confirmation</h2>


            <div className="md:flex justify-center items-start gap-16 my-16" >
                <div className="md:w-1/2">
                    <h2 className="md:text-2xl text-lg font-medium  ">Order Details</h2>
                    <div className="my-4">
                        <OrderDetails />
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="md:text-2xl text-lg font-medium  ">ORDER Summary</h2>
                    <div className=" my-4 md:px-16 px-4 md:py-8 py-4 font-medium text-sm  bg-LightGray">
                        <OrderSummary />
                    </div>
                </div>
            </div>

            <PDFButton />
        </div>
    )
}
export default page