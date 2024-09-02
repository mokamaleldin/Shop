
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import Link from "next/link";

const Info = () => {


    return (
        <div className="my-4 px-16 py-8 font-medium text-sm  bg-LightGray">
            <OrderSummary />
            <div className="mb-12">
                <Payment />
            </div>
            <Link href={'/Order-Confirmation '} >
                <button className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white">
                    PLACE ORDER
                </button>
            </Link>

        </div>
    )
}
export default Info