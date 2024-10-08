import AboutProduct from "@/app/components/Product/AboutProduct"
import { ProductDetails } from "@/app/components/Product/ProductDetails"
import SimilarItemsProduct from "@/app/components/Product/SimilarItemsProduct"
import products from "@/app/static/products"
const page = ({ params }: { params: { slug: string } }) => {

    return ( 
        <div className="md:mx-20 mx-5">
            {products.map((product) => {
                if (product.slug === params.slug) {
                    return (
                        <div key={product.SKU} className="md:mb-16">
                            <ProductDetails product={product} />
                            <AboutProduct product={product} />
                            <SimilarItemsProduct category={product.category || ""} SKU={product.SKU} />
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default page