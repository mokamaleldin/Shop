import Input from "../Inputs/Input"

const Coupon = () => {
    return (
        <div className="my-16">
            <h6 className="text-black text-sm mb-4">
                <span className="text-DarkGray mr-1">Have a coupon? </span>
                Click here to enter your code
            </h6>
            <div className="md:w-1/2 border border-Gray p-8">
                <h6 className="text-DarkGray">If you have a coupon code, please apply it below.</h6>
                <div className="md:flex justify-between gap-4 mt-8">
                    <Input placeholder="Coupon Code" />
                    <button className="md:mt-0 mt-4 border md:w-1/2 py-1 md:py-3 md:px-10 px-2 md:text-base text-sm rounded-md md:font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white">
                        APPLY COUPON
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Coupon