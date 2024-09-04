import { filterActions } from "@/app/lib/store/features/filterSlice";
import Image from "next/image"
import { useDispatch } from "react-redux";

const SearchInput = () => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterActions.setFilter(e.target.value));
    };
    return (
        <div className="w-full flex justify-end items-center relative">
            <input
                type="text"
                onChange={handleChange}
                placeholder="Search..." className="border-b-2 focus:outline-none border-gray-300 p-1 w-full"
            />
            <Image src="/icons/search.svg" alt="search" width={20} height={20} className="absolute mr-2" />
        </div>
    )
}
export default SearchInput;