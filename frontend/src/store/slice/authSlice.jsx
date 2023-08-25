import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name:'auth',
  initialState: {
     otp:null,
     isAuthenticated:false
     },
  reducers: {
    setotp: (state,action) => {
         state.otp = action.payload
        
    },
    setAuth: (state,action) => {
         state.isAuthenticated = action.payload
        
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { setotp , setAuth} = authSlice.actions

export default authSlice.reducer