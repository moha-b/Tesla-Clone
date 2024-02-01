import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model X", "Model 3", "Model Y"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export default carSlice.reducer;