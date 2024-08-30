import Link from "next/link"
import Card from "./Card"

const Shopingbag = () => {
    return (
        <div className="mt-12 mb-4 mx-4 flex flex-col gap-4 overflow-hidden">
            <div className="text-lg ">Shopping bag</div>
            <div className="text-xs text-DarkGray">(Number) items</div>
            <div className="overflow-auto">
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex saepe sunt magnam ipsa. Odit beatae laboriosam quod quidem tenetur officiis tempore perferendis, rerum sequi! Nobis autem corrupti recusandae porro.</div>
            </div>


            <div className="flex flex-col gap-4 justify-end ">
                <hr className="border-t-2 border-Gray " />
                <div className="text-sm flex justify-between items-center">
                    <p>Subtotal ((number) items)</p>
                    <p>price</p>
                </div>
                <Link href="/checkout">
                    <button className="border w-full py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                        VIEW CART
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Shopingbag