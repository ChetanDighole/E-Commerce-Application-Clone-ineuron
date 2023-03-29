import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice
    }
})

export default store
