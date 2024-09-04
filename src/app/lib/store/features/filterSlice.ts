import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter: "",
    filterBlogs: "",
    priceRange: "default",
    category: "default",
    discount: false,
    categoryBlog: "All",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setFilterBlog: (state, action) => {
            state.filterBlogs = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setCategoryBlog: (state, action) => {
            state.categoryBlog = action.payload;
        },
        toggleDiscount: (state) => {
            state.discount = !state.discount;
        },
    },
});

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;