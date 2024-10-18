import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import WishlistSlice from "./slices/WishlistSlice";
import cartSlice from "./slices/cartSlice";


const cartStore = configureStore({
    reducer:{
     productReducer:productSlice,
     wishlistReducer : WishlistSlice,
     cartReducer:cartSlice
    }
})
export default cartStore