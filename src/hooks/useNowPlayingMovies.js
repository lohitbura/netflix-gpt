import { API_OPTIONS } from "../utils/api_constants";
import { API_FAILURE, API_SUCCESS } from "../utils/constants";
import { apiResponseWrapper } from "../utils/api_response_wrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";


 const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const nowPlayingMovies  = useSelector(store=>store.movies.nowPlayingMovies);

    useEffect(()=>{
      !nowPlayingMovies &&  fetchMovies();
    },[])

   const fetchMovies = async()=>{
        try{
            const movieData =  await  fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const jsonData = await movieData.json()
            dispatch(addNowPlayingMovies(apiResponseWrapper(jsonData,API_SUCCESS)));
        }
        catch(e){
            dispatch(addNowPlayingMovies(apiResponseWrapper(e,API_FAILURE)));
        }
    }
    
}

export default useNowPlayingMovies;