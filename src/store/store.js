import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filters/filterSlice';

export default configureStore({
    reducer: {
        filter: filterReducer,
    },
})