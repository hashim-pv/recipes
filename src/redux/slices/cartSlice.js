import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cartItems",
    initialState:[],
    reducers:{
        //add to cart 
        addToCart:(state,actionFromView)=>{
            const exstingProduct = state.find(item=>item.id==actionFromView.payload.id)
            if(exstingProduct){
                const remainingProducts = state.filter(item=>item.id!=actionFromView.payload.id)
                exstingProduct.quantity++
                exstingProduct.totalPrice=exstingProduct.quantity*exstingProduct.price
                state=[...remainingProducts,exstingProduct]

            }else{
                state.push({...actionFromView.payload,quantity:1,totalPrice:actionFromView.payload.price})
            }

        },
        //remove single Item
        removeCartItem:(state,actionFromCart)=>{
            return state.filter(item=>item.id!=actionFromCart.payload)
        },
        incQuantity:(state,actionFromCart)=>{
            const exstingProduct=state?.find(item=>item.id==actionFromCart.payload)
            exstingProduct.quantity++
            exstingProduct.totalPrice=exstingProduct.quantity*exstingProduct.price
            const remainingProducts = state.filter(item=>item.id!=actionFromView.payload.id)
              state=[...remainingProducts,exstingProduct]
        

        },
        //decQuantity 0
        decQuantity:(state,actionFromCart)=>{
            const exstingProduct=state?.find(item=>item.id==actionFromCart.payload)
            exstingProduct.quantity--
            exstingProduct.totalPrice=exstingProduct.quantity*exstingProduct.price
            const remainingProducts = state.filter(item=>item.id!=actionFromView.payload.id)
              state=[...remainingProducts,exstingProduct]
        },
        //empty cart
        emptyCart:(state)=>{
            return state=[]
        }


    }
})
export const {addToCart,removeCartItem,incQuantity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer