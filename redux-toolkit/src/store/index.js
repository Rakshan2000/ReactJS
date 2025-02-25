import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter'
import AddNewBlog from './slices/blogSlice'


const store = configureStore({
    reducer: { 
        counter: counterReducer,
        blog: AddNewBlog
    }
})

export default store;