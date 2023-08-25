
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    confirmstatus:false,
    information:{
        endpoint:"",
        id:null, 
    } 
}
const confirmSlice = createSlice({
    
    name:confirm,
    initialState,
    reducers:{
                
              changeConfirm : (state,action)=>{
                 
               state.confirmstatus = action.payload

           },
           informationGet  : (state,action)=>{
            state.information = action.payload
           }

    }

})

 export const { changeConfirm  , informationGet} = confirmSlice.actions;
export default confirmSlice.reducer;