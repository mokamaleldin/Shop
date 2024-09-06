import { TProduct } from "@/app/types/Product";
import Link from "next/link"

const ViewCart = ({ setOpen, cart }: { setOpen: (isOpen: boolean) => void, cart: TProduct[] }) => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col gap-4 justify-end ">
            <hr className="border-t-2 border-Gray " />
            <div className="text-sm flex justify-between items-center">
                <p>Subtotal {cart.length > 1 ? `${cart.length} Items` : `${cart.length} Item`}</p>
                <p>${totalPrice}</p>
            </div>
            <Link rel="preload" href="/Shopping-Card">
                <button onClick={() => setOpen(false)} className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                    VIEW CART
                </button>
            </Link>

        </div>
    )
}
export default ViewCart