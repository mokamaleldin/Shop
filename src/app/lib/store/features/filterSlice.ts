import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "",
    priceRange: "default",
    category: "default",
    discount: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        toggleDiscount: (state) => {
            state.discount = !state.discount;
        },
    },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;