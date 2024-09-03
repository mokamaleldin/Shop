import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    postcode: '',
    city: '',
    phone: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardholderName: '',
    company: '',
    orderNotes: '',
}

/*
    function updateField: state هذه الدالة تقوم بتحديث حقل معين في الـ 
    field:  الحقل الذي يتم تحديثه
    field: عند حدوث تغيير في عنصر الإدخال Redux(state)  هو مصطلح يُستخدم للإشارة إلى اسم الحقل (أو العنصر) الذي يتم تحديثه في حالة الـ
    value: القيمة الجديدة للحقل
*/

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updateField(state: typeof initialState, action) {
            const { field, value } = action.payload;
            state[field as keyof typeof initialState] = value;
        },
    }
})

export const checkoutActions = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;