import { filterActions } from "@/app/lib/store/features/filterSlice";
import SearchInput from "../Inputs/SearchInput"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import Image from "next/image";

const BlogNavbar = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state: RootState) => state.filter.categoryBlog);


    const handleCategoryClick = (categoryBlog: string) => {
        dispatch(filterActions.setCategoryBlog(categoryBlog));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setFilterBlog(e.target.value));
    };

    return (
        <div>
            <div className="w-full flex justify-end items-center relative">
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Search..." className="border-b-2 focus:outline-none border-gray-300 p-1 w-full"
                />
                <Image loading="eager" src="/icons/search.svg" alt="search" width={20} height={20} className="absolute mr-2" />
            </div>
            <div className="my-8">
                <h3 className="md:text-xl font-medium mb-4">Categories</h3>
                <div className="flex md:flex-col gap-4 md:text-base text-sm  text-DarkGray md:gap-2" >
                    {["All", "Lifestyle", "Season", "Fashion", "Accessories"].map((category) => (
                        <p
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`cursor-pointer ${selectedCategory === category ? 'text-black' : ''}`}
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default BlogNavbar