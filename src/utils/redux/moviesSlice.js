import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        videoBackgroundTrailer:null
    },
    reducers:{
        addNowPlayingMovies(state,actions){
            state.nowPlayingMovies = actions.payload;
        },
        addVideoBackgroundTrailer(state,actions){
            state.videoBackgroundTrailer = actions.payload;
        }
    }
})
 
export const {addNowPlayingMovies, addVideoBackgroundTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;