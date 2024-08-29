import SearchInput from "../Inputs/SearchInput"

const BlogNavbar = () => {
    return (
        <div>
            <SearchInput />
            <div className="my-8">
                <h3 className="text-xl font-medium mb-4">Categories</h3>
                <div className="flex flex-col text-DarkGray gap-2">
                    <p>Lifestyle</p>
                    <p>Season</p>
                    <p>Fashion</p>
                    <p>Accessories</p>
                </div>
            </div>

        </div>
    )
}
export default BlogNavbar