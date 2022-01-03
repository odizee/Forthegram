import { configureStore } from "@reduxjs/toolkit";
import correctReducer from './correctionSlice'

export default configureStore({
    reducer: {
        correct: correctReducer,
    }
})