import Image from "next/image"

const SearchInput = () => {
    return (
        <div className="w-full flex justify-end items-center relative">
            <input type="text" placeholder="Search..." className="border-b-2 focus:outline-none border-gray-300 p-1 w-full" />
            <Image src="/icons/search.svg" alt="search" width={20} height={20} className="absolute mr-2" />
        </div>
    )
}
export default SearchInput;