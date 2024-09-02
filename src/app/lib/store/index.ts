import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from "./features/cartSlice";

const store = configureStore({
    reducer: {
        card: cardReducer,
    },
})

export default store;