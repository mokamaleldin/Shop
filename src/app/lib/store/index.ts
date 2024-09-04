import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cartSlice";
import { checkoutReducer } from "./features/checkoutSlice";
import { couponReducer } from "./features/couponSlice";
import { filterReducer } from "./features/filterSlice";

const store = configureStore({
    reducer: {
        card: cardReducer,
        checkout: checkoutReducer,
        coupon: couponReducer,
        filter: filterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;