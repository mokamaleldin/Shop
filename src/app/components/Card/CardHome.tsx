import products from "@/app/static/products"
import Card from "./Card"
const CardHome = () => {

    return (
        <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
                <Card key={product.name} product={product} />
            ))}
        </div>
    )
}
export default CardHome