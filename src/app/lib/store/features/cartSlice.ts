import { TProduct } from "@/app/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
    items: TProduct[];
    quantity: number;
}

const initialState: CartState = {
    items: [],
    quantity: 0,
};

const cardSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<TProduct>) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.SKU === newItem.SKU);
            state.quantity++;
            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const SKU = action.payload;
            const existingItem = state.items.find(item => item.SKU === SKU);
            if (existingItem) {
                state.quantity--;
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.SKU !== SKU);
                } else {
                    existingItem.quantity--;
                }
            }
        },
        removeAllFromCart(state, action: PayloadAction<string>) {
            const SKU = action.payload;
            const existingItem = state.items.find(item => item.SKU === SKU);
            if (existingItem) {
                state.quantity -= existingItem.quantity;
                state.items = state.items.filter(item => item.SKU !== SKU);
            }
        },
    },
});

export const CardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
