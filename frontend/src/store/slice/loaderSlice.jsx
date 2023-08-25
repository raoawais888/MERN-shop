
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    status : false

}


const loaderSlice = createSlice({
    name:"loader",
    initialState,
    reducers:{
        
         loaderChange  : (state,action)=>{
            state.status  = action.payload;
         }

    }
})

export const {loaderChange} = loaderSlice.actions;

export default loaderSlice.reducer