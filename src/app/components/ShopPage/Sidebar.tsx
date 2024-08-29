import Image from "next/image"
import SearchInput from "../Inputs/SearchInput"

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className="mt-8">
        <select id="shop" name="shop" className="p-3 border-2 w-full" >
          <option value="volvo">Shop By</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>

        <select id="shop" name="shop" className="p-3 border-2 w-full mt-3" >
          <option value="volvo">Sort By</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <label className="flex justify-between items-center mt-8">
        <input type="checkbox" value="" className="sr-only peer" />
        <span className="font-medium">On sale</span>
        <div className="relative w-8 h-4 rounded-full bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[1.7px] after:start-[1px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
      </label>

      <label className="flex justify-between items-start mt-8">
        <input type="checkbox" value="" className="sr-only peer" />
        <span className="font-medium">In stock</span>
        <div className="relative w-8 h-4 rounded-full bg-gray-700 peer-checked:after:translate-x-full after:absolute after:top-[1.7px] after:start-[1px] after:bg-white after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-blue-600"></div>
      </label>




    </div>
  )
}
export default Sidebar