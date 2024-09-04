import products from "@/app/static/products"
import Card from "./Card"
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { TProduct } from "@/app/types/Product";
const AllCards = () => {
    const { filter, priceRange, category, discount } = useSelector((state: RootState) => state.filter);

    const filterProducts = (product: TProduct) => {
        const titleMatch = product.name.toLowerCase().includes(filter.toLowerCase());
        const priceMatch = priceRange === "default" || (
            product.price >= parseInt(priceRange.split("-")[0], 10) &&
            product.price <= parseInt(priceRange.split("-")[1], 10)
        );
        const categoryMatch = category === "default" || product.category === category;
        const discountMatch = !discount || product.discount;

        return titleMatch && priceMatch && categoryMatch && discountMatch;
    };


    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 md:mt-0 mt-4">
            {products.filter(filterProducts).map((product) => (
                <Card key={product.name} product={product} />
            ))}
        </div>
    )
}
export default AllCards