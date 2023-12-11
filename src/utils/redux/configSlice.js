import { createSlice } from "@reduxjs/toolkit";


const configSlice = createSlice({
    name:'config',
    initialState:{
        langKey:"en"
    },
    reducers:{
        changeLanguage(state,actions){
            state.langKey = actions.payload;
        }
    }
});

export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;