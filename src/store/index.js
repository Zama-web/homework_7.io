import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from './fetchSlice'



export default configureStore({
    reducer: {
        fetchReducer: fetchReducer
    }
})