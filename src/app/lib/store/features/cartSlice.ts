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
                    SKU: newItem.SKU,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
                existingItem.price = existingItem.price + newItem.price;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const SKU = action.payload;
            const existingItem = state.items.find(item => item.SKU === SKU);
            state.quantity--;
            if (existingItem && existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.SKU !== SKU);
            } else {
                if (existingItem) {
                    existingItem.quantity--;
                }
                if (existingItem) {
                    existingItem.price = existingItem.price - existingItem.price;
                }
            }
        },

    },
});

export const CardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
