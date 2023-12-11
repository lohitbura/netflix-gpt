import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        videoBackgroundTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        searchedMovieList:null,
        searchedMovieNames:null
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
        },
        addSearchMovies(state,actions){
            const {movieNames,movieList} = actions.payload;
            state.searchedMovieList = movieList;
            state.searchedMovieNames = movieNames;
        }
    }
})
 
export const {addNowPlayingMovies, addVideoBackgroundTrailer, addPopularMovies, addTopRatedMovies, addSearchMovies} = moviesSlice.actions;
export default moviesSlice.reducer;