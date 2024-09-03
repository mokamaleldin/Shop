import Link from "next/link";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";


const YourOrder = () => {
    const { firstName, lastName, country, streetAddress, postcode, city, phone, email, cardNumber, expirationDate, cvv, cardholderName } = useSelector((state: RootState) => state.checkout);

    const isFormComplete = () => {
        return (
            firstName && lastName && country && streetAddress && postcode &&
            city && phone && email && cardNumber && expirationDate &&
            cvv && cardholderName
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-medium  ">Billing Details</h2>
            <div className="my-4 px-16 py-8 font-medium text-sm bg-LightGray">
                <OrderSummary />
                <div className="mb-12">
                    <hr className="border-t-2 border-Gray my-4" />
                    <Payment />
                </div>

                {!isFormComplete() && (
                    <div className="text-red-600 mb-4">
                        Please fill out all the fields to place your order.
                    </div>
                )}

                <Link href={'/Order-Confirmation'} passHref>
                    <button
                        disabled={!isFormComplete()}
                        className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white"
                    >
                        PLACE ORDER
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default YourOrder