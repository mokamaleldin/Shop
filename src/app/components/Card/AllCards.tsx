import products from "@/app/static/products"
import Card from "./Card"
const AllCards = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {products.map((product) => {
                return (
                    <Card key={product.name} product={product} />
                )
            })}
        </div>
    )
}
export default AllCards