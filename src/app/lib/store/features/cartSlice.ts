import { TProduct } from "@/app/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    items: [] as TProduct[],
};

const cardSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TProduct>) {
            state.items.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item: TProduct) => item.SKU !== action.payload);
        },
    },
});

export const CardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
