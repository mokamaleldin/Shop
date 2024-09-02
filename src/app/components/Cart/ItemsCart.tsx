
import { TProduct } from "@/app/types/Product"
import Image from "next/image";
import DeleteItems from "./DeleteItems";

const ItemsCart = ({ cart }: { cart: TProduct[] }) => {
    return (
        <>
            {
                cart.map((item) => (
                    <div key={item.SKU} className="grid grid-cols-3 mb-4">
                        <Image width={150} height={150} src={item.image} alt={item.name} />
                        <div className="flex flex-col gap-4">
                            <div className="font-">{item.name}</div>
                            <div className="text-accent">{item.price} USD</div>
                        </div>
                        <div className="flex gap-8">
                            <div className="bg-LightGray text-DarkGray flex w-fit h-fit gap-4 px-3 py-3 rounded-md">
                                <button>-</button>
                                <div>1</div>
                                <button>+</button>
                            </div>
                            <DeleteItems SKU={item.SKU} />
                        </div>

                    </div>
                ))
            }
        </>
    )
}
export default ItemsCart