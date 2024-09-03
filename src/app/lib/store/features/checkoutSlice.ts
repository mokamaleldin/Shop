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

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updateField(state: any, action) {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetFields: () => initialState
    }
})

export const checkoutActions = checkoutSlice.actions;
export const checkoutReducer = checkoutSlice.reducer;