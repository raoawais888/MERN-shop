import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'
import loader from "./slice/loaderSlice"
import confirm from "./slice/confirmSlice"

export default configureStore({
  reducer: {
    auth,
    loader,
    confirm,
  }
})