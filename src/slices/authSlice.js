import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        currentUser : null,
    },
    reducers : {
        setCurrentUser : (state,action) =>{
            const user = action.payload.email;
            state.currentUser = user;
        },
        removeCurrentUser : (state,action) => {},

    }
})

export const {setCurrentUser,removeCurrentUser} = authSlice.actions;

export default authSlice.reducer;