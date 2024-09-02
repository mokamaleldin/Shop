import { TProduct } from "@/app/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    items: [] as TProduct[], quantity: 0
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
        Increment(state) {
            state.quantity++;
        },
        Decrement(state) {
            if (state.quantity <= 0) {
                return;
            }
            state.quantity--;
        }

    },
});

export const CardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
