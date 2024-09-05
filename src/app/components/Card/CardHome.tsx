import products from "@/app/static/products"
import Card from "./Card"
const CardHome = () => {

    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
            {products.map((product) => (
                <Card key={product.name} product={product} />
            ))}
        </div>
    )
}
export default CardHome