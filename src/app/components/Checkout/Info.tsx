import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import Link from "next/link";
import { RootState } from "@/app/lib/store";

const Info = () => {
    const { firstName, lastName, country, streetAddress, postcode, city, phone, email, cardNumber, expirationDate, cvv, cardholderName } = useSelector((state: RootState) => state.checkout);

    const isFormComplete = () => {
        return (
            firstName && lastName && country && streetAddress && postcode &&
            city && phone && email && cardNumber && expirationDate &&
            cvv && cardholderName
        );
    }

    return (
        <div className="my-4 px-16 py-8 font-medium text-sm bg-LightGray">
            <OrderSummary />
            <div className="mb-12">
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
    );
}
export default Info;
