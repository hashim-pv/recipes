import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAllProducts=createAsyncThunk("recipes/fetchAllProducts",async () =>{
    const  result = await axios.get("https://dummyjson.com/recipes")
  //  console.log(result);
  sessionStorage.setItem("allProducts",JSON.stringify(result.data.recipes
  ))
  console.log(result);
  
    
  return  result.data.recipes
    
})

const productSlice= createSlice({
    name:'recipes',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
      loading:false,
      error:""
    },
    reducers:{
// search product 
       searchProduct:(state,actionFromHeader)=>{
                 state.allProducts=state.dummyAllProducts.filter(item=>item.cuisine.toLowerCase().includes(actionFromHeader.payload))
        }
      
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyAllProducts=apiResult.payload
            state.loading=false
            state.error=""

        })
        builder.addCase(fetchAllProducts.pending,(state,apiResult)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=true
            state.error=""

        })
        builder.addCase(fetchAllProducts.rejected,(state,apiResult)=>{
            state.allProducts=[]
            state.dummyAllProducts=[]
            state.loading=false
            state.error="API CALL FAILED..."

        })
    }
})
export default productSlice.reducer
export const {searchProduct}= productSlice.actions