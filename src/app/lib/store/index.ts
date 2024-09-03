import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cartSlice";
import { checkoutReducer } from "./features/checkoutSlice";

const store = configureStore({
    reducer: {
        card: cardReducer,
        checkout: checkoutReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;