import Input from "../Inputs/Input"

const DillingDetails = () => {
    return (
        <form >
            <h2 className="text-2xl font-medium  ">Billing Details</h2>
            <div className="flex gap-4 py-4">
                <Input placeholder="First name" />
                <Input placeholder="last name" />
            </div>
            <div className="py-4">
                <Input placeholder="Company Name" />
            </div>
            <div className="py-4">
                <Input placeholder="Country" />
            </div>
            <div className="py-4">
                <Input placeholder="Street Address" />
            </div>
            <div className="py-4">
                <Input placeholder="Postcode / ZIP" />
            </div>
            <div className="py-4">
                <Input placeholder="Town / City" />
            </div>
            <div className="py-4">
                <Input placeholder="Phone" />
            </div>
            <div className="py-4">
                <Input placeholder="Email" />
            </div>
            <div className="py-4">
                <Input placeholder="Order notes" />
            </div>
        </form>
    )
}
export default DillingDetails