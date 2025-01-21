import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        currentUser : null,
    },
    reducers : {
        setCurrentUser : (state,action) =>{
            // console.log("action.payload",action.payload);
            const user = action.payload;
            state.currentUser = user;
        },
        removeCurrentUser : (state,action) => {},

    }
})

export const {setCurrentUser,removeCurrentUser} = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.currentUser;

export default authSlice.reducer;