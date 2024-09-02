const Input = ({ placeholder }: { placeholder: string }) => {
    return (
        <div className="w-full flex justify-end items-center relative">
            <input type="text" placeholder={placeholder} className="border-b-2 focus:outline-none text-sm border-gray-300 py-3 w-full" />
        </div>
    )
}
export default Input