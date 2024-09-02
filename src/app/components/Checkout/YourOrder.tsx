import { additionalCost, driveFreeThreshold } from "@/app/lib/config/config";
import { RootState } from "@/app/lib/store";
import { useSelector } from "react-redux";

const YourOrder = () => {
    const cart = useSelector((state: RootState) => state.card.items);

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const free = totalPrice < driveFreeThreshold ? "Shipping is not free" : "Free shipping";
    const finalPrice = totalPrice < driveFreeThreshold ? totalPrice + additionalCost : totalPrice;

    return (
        <div>
            <h2 className="text-2xl font-medium  ">Billing Details</h2>
            <div className="my-4 px-16 py-8 font-medium text-sm  bg-LightGray">
                <div className="flex justify-between ">
                    <p>PRODUCT</p>
                    <p>TOTAL</p>
                </div>
                <hr className="border-t-2 border-Gray my-4" />
                {cart.map((item) => (
                    <div className="flex justify-between mb-4 text-DarkGray">
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
                <hr className="border-t-2 border-Gray my-4" />
                <div className="flex justify-between">
                    <p>SUBTOTAL</p>
                    <p className=" text-DarkGray">${totalPrice}</p>
                </div>
                <hr className="border-t-2 border-Gray my-4" />
                <div className="flex justify-between">
                    <p>SHIPPING</p>
                    <p className=" text-DarkGray">{free}</p>
                </div>
                <hr className="border-t-2 border-Gray my-4" />
                <div className="flex justify-between font-semibold mb-16">
                    <p>TOTAL</p>
                    <p className="">{finalPrice}</p>
                </div>



            </div>
        </div>
    )
}
export default YourOrder