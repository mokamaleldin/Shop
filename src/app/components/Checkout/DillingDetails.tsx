import { useDispatch, useSelector } from "react-redux";
import Input from "../Inputs/Input"
import { RootState } from "@/app/lib/store";
import { checkoutActions } from "@/app/lib/store/features/checkoutSlice";

const DillingDetails = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, country, streetAddress, postcode, city, phone, email, company, orderNotes } = useSelector((state: RootState) => state.checkout);

    //field: عند حدوث تغيير في عنصر الإدخال Redux(state)  هو مصطلح يُستخدم للإشارة إلى اسم الحقل (أو العنصر) الذي يتم تحديثه في حالة الـ
    const handleInputChange = (field: string, value: string) => {
        dispatch(checkoutActions.updateField({ field, value }));
    }

    return (
        <form>
            <h2 className="text-2xl font-medium">Billing Details</h2>
            <div className="flex gap-4 py-4">
                <Input placeholder="First name" value={firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} required />
                <Input placeholder="Last name" value={lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input placeholder="Company Name" value={company} onChange={(e) => handleInputChange('company', e.target.value)} />
            </div>
            <div className="py-4">
                <Input placeholder="Country" value={country} onChange={(e) => handleInputChange('country', e.target.value)} />
            </div>
            <div className="py-4">
                <Input placeholder="Street Address" value={streetAddress} onChange={(e) => handleInputChange('streetAddress', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input placeholder="Postcode / ZIP" value={postcode} onChange={(e) => handleInputChange('postcode', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input placeholder="Town / City" value={city} onChange={(e) => handleInputChange('city', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input placeholder="Phone" type='number' value={phone} onChange={(e) => handleInputChange('phone', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input type='email' placeholder="Email" value={email} onChange={(e) => handleInputChange('email', e.target.value)} required />
            </div>
            <div className="py-4">
                <Input placeholder="Order notes" value={orderNotes} onChange={(e) => handleInputChange('orderNotes', e.target.value)} />
            </div>
        </form>
    )
}
export default DillingDetails