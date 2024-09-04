import SearchInput from "../Inputs/SearchInput"

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="mt-8">
        <select id="shop" name="shop" className="p-3 border-2 w-full" >
          <option value="default" >sort By Price</option>
          <option value="0-50">0-50</option>
          <option value="50-100">50-100</option>
          <option value="100-300">100-300</option>
          <option value="300-1000">300-1000</option>
          <option value="1000-2000">1000-2000</option>
        </select>

        <select id="shop" name="shop" className="p-3 border-2 w-full mt-3" >
          <option value="default">Sort By category</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Hair_Accessories">Hair Accessories</option>
        </select>
      </div>

      <label className="flex justify-between items-start mt-8">
        <input type="checkbox" value="" className="sr-only peer" />
        <span className="font-medium">Discount</span>
        <div className="relative w-8 h-4 rounded-full bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[1.7px] after:start-[1px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
    </div>
  )
}
export default Sidebar