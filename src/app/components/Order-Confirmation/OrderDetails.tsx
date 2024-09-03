import { RootState } from "@/app/lib/store";
import generateRandomOrderNumber from "@/app/lib/utils/orderNumber";
import { useSelector } from "react-redux";

const OrderDetails = () => {
    const { cardNumber, email, cvv, cardholderName, streetAddress, postcode, city, country, phone } = useSelector((state: RootState) => state.checkout);

    const orderNumber = generateRandomOrderNumber();

    return (
        <div>
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h6>ORDER NUMBER</h6>
                    <p className="text-DarkGray mt-2">{orderNumber}</p>
                </div>
                <div>
                    <h6>DELIVERY OPTIONS</h6>
                    <p className="text-DarkGray mt-2">Standard delivery</p>
                </div>
            </div>

            <div className="flex justify-between items-start mb-8">
                <div>
                    <div>
                        <h6>EMAIL</h6>
                        <p className="text-DarkGray mt-2">{email}</p>
                    </div>
                    <div>
                        <h6 className="mt-8">PAYMENT METHOD</h6>
                        <p className="text-DarkGray mt-2">{`Mastercard: ${cardNumber.slice(-4)} *****`}</p>
                    </div>
                </div>

                <div>
                    <h6>DELIVERY ADDRESS</h6>
                    <p className="text-DarkGray mt-2">{streetAddress}</p>
                    <p className="text-DarkGray mt-2">{postcode}</p>
                    <p className="text-DarkGray mt-2">{city}</p>
                    <p className="text-DarkGray mt-2">{country}</p>
                </div>
            </div>


            <div className="flex justify-between items-start mb-8">
                <div>
                    <h6>ORDER DATE</h6>
                    <p className="text-DarkGray mt-2">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                    <h6>CONTACT NUMBER</h6>
                    <p className="text-DarkGray mt-2">{phone}</p>
                </div>
            </div>
        </div>
    )
}
export default OrderDetails