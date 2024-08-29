const AddToCard = () => {
    return (
        <div className="flex items-center gap-10 py-8">
            <div className="bg-LightGray text-DarkGray flex gap-6 px-8 py-3 rounded-md">
                <button>-</button>
                <div>1</div>
                <button>+</button>
            </div>
            <div>
                <button className="border px-16 py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
export default AddToCard