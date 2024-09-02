import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    items: [],
};

const cardSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload);
        },
    },
});

export const cardAction = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
