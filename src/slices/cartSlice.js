import { createSlice } from "@reduxjs/toolkit";
import allProducts from './../assets/allProducts;'

const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        items : allProducts.slice(0,4).map(ele => ({...ele, quantity : 1,selected : true}))
    },
    reducers : {}
})

export default cartSlice.reducer;