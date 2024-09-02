import { RootState } from "@/app/lib/store";
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const Shopingbag = () => {
    const cart = useSelector((state: RootState) => state.card.items);
    console.log(cart)
    return (
        <div className="mt-12 mb-4 mx-4 flex flex-col gap-4 overflow-hidden">
            <div className="text-lg ">Shopping bag</div>
            <div className="text-xs text-DarkGray">(Number) items</div>

            <div className="overflow-auto">
                <div>
                    {cart.map((item) => (
                        <div key={item.SKU} className="flex items-center gap-4">
                            <Image width={100} height={100} src={item.image} alt={item.name} />
                            <div className="flex flex-col">
                                <div>{item.name}</div>
                                <div>{item.price} USD</div>
                            </div>
                        </div>
                    ))}
                </div>
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