import products from "@/app/static/products"
import Card from "../Card/Card"

const SimilarItemsProduct = ({ category, SKU }: { category: string, SKU: string }) => {
    return (
        //make it take the first 3 items from the array
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5">
            {products.map((product) => {
                if (category === product.category && SKU !== product.SKU) {
                    return (
                        <Card key={product.name} product={product} />
                    )
                }
            })}
        </div>
    )
}
export default SimilarItemsProduct