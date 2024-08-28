import About from "@/app/components/Product/About"
import { Hero } from "@/app/components/Product/Hero"
import products from "@/app/static/products"

const page = ({ params }: { params: { slug: string } }) => {
    return (
        <div className="mx-20">
            {products.map((product) => {
                if (product.slug === params.slug) {
                    return (
                        <div key={product.name} className="mb-16">
                            <Hero product={product} />
                            <About product={product} />
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default page