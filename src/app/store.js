import { configureStore } from '@reduxjs/toolkit'
import carReducer from "../features/car/car_slice"
export const store = configureStore({
    reducer: {
        car: carReducer
    },
})