import Input from "@/app/components/Inputs/Input";

const page = () => {
    return (
        <div className="md:mx-20 mx-5 flex flex-col justify-center items-center py-8 gap-8">
            <div className="gap-8 flex flex-col">
                <h2 className="md:text-4xl text-2xl font-medium text-center">Contact Us</h2>
                <p>Say Hello send us your thoughts about our products or share
                    your ideas with our Team!</p>
            </div>
            <div className="w-1/2 flex flex-col gap-8">
                <div className="flex gap-4 py-4 w-full">
                    <Input placeholder="First name" />
                    <Input placeholder="last name" />
                </div>
                <div className="flex gap-4 py-4 w-full">
                    <Input placeholder="Email" />
                    <Input placeholder="Subject" />
                </div>
                <div className="py-4 w-full">
                    <Input placeholder="Message" />
                </div>
            </div>
            <button className="border w-fit px-16 py-3 rounded-md font-semibold duration-200 border-black text-white bg-black hover:text-black hover:bg-white">
                SEND
            </button>
        </div>
    )
}
export default page;