import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleGptButtonState:false
    },
    reducers:{
        toggleGptButton(state){
            state.toggleGptButtonState = !state.toggleGptButtonState;
        }
    }
})

export const {toggleGptButton} = gptSlice.actions;

export default gptSlice.reducer;