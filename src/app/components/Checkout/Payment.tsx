import Image from "next/image"
import Input from "../Inputs/Input"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { checkoutActions } from "@/app/lib/store/features/checkoutSlice";
import PaymentImg from "./PaymentImg";

const Payment = () => {
    const dispatch = useDispatch();
    const { cardNumber, expirationDate, cvv, cardholderName } = useSelector((state: RootState) => state.checkout);

    const handleInputChange = (field: string, value: string) => {
        dispatch(checkoutActions.updateField({ field, value }));
    }
    return (
        <div>
            <div className="md:flex justify-between items-center font-semibold mb-8">
                <p className="font-semibold">Payment Methods</p>
                <PaymentImg />
            </div>
            <div>
                <div className="text-sm text-DarkGray">
                    <div className="my-4">
                        <label>
                            Card Number
                        </label>
                        <div className="w-full flex justify-end items-center relative">
                            <input
                                value={cardNumber}
                                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                                required
                                type="text"
                                placeholder={'**** **** **** ****'}
                                className="border-b-2 focus:outline-none bg-LightGray text-sm border-Gray py-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <label >
                            Expiration Date
                        </label>
                        <div className="w-full flex justify-end items-center relative">
                            <input
                                value={expirationDate}
                                onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                                required
                                type="date"
                                pattern="\d{1,2}/\d{2}"
                                placeholder={'MM/YY'}
                                className="border-b-2 focus:outline-none bg-LightGray text-sm border-Gray py-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="my-4">
                        <label>
                            CVV
                        </label>
                        <div className="w-full flex justify-end items-center relative">
                            <input
                                type="number"
                                placeholder="***"
                                className="border-b-2 focus:outline-none bg-LightGray text-sm border-Gray py-2 w-full"
                                value={cvv}
                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                required
                            />
                        </div>

                    </div>

                    <div className="my-4">
                        <label >
                            Cardholder Name
                        </label>
                        <div className="w-full flex justify-end items-center relative">
                            <input
                                datepicker-format="mm/yy"
                                id="card-expiration-input"
                                type="text"
                                placeholder={'Full Name'}
                                className="border-b-2 focus:outline-none bg-LightGray text-sm border-Gray py-2 w-full"
                                value={cardholderName}
                                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Payment