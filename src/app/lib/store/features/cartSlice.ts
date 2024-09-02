import { TProduct } from "@/app/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    items: [] as TProduct[], quantity: 0 as number
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
                });
            } else {
                existingItem.price = existingItem.price + newItem.price;
            }
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
