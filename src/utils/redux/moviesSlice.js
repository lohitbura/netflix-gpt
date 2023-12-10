import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        videoBackgroundTrailer:null,
        popularMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies(state,actions){
            state.nowPlayingMovies = actions.payload;
        },
        addVideoBackgroundTrailer(state,actions){
            state.videoBackgroundTrailer = actions.payload;
        },
        addPopularMovies(state,actions){
            state.popularMovies = actions.payload;
        },
        addTopRatedMovies(state,actions){
            state.topRatedMovies = actions.payload;
        }
    }
})
 
export const {addNowPlayingMovies, addVideoBackgroundTrailer, addPopularMovies, addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer;