import { TProduct } from "@/app/types/Product"
import Image from "next/image"
import Link from "next/link";
type CardProps = {
    product: TProduct;
};
const Card: React.FC<CardProps> = ({ product }) => {
    return (
        <Link href={`/Product/${product.slug}`} className=" mb-16">
            <Image src={product.image} alt={product.name} width={350} height={350} />
            <p className="my-2 text-lg text-black">{product.name}</p>
            <p className="my-2 text-accent">${product.price},00</p>
        </Link>
    )
}
export default Card