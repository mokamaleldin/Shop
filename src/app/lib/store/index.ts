import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cartSlice";
import { checkoutReducer } from "./features/checkoutSlice";
import Coupon from "@/app/components/Checkout/Coupon";
import { couponReducer } from "./features/couponSlice";

const store = configureStore({
    reducer: {
        card: cardReducer,
        checkout: checkoutReducer,
        coupon: couponReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;