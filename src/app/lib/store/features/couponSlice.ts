import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CouponState {
    coupon: string | null;
    discount: number;
    isValid: boolean;
}

const initialState: CouponState = {
    coupon: null,
    discount: 0,
    isValid: false,
};


const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        applyCoupon(state, action: PayloadAction<string>) {
            const couponCode = action.payload;
            if (couponCode === "mkee" || couponCode === "a9v") {
                state.coupon = couponCode;
                state.discount = 0.10;
                state.isValid = true;
            } else {
                state.coupon = null;
                state.discount = 0;
                state.isValid = false;
            }
        },
    }
})

export const couponActions = couponSlice.actions;
export const couponReducer = couponSlice.reducer;