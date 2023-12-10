import { useEffect } from "react";
import { API_OPTIONS } from "../utils/api_constants";
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/redux/moviesSlice";
import { apiResponseWrapper } from "../utils/api_response_wrapper";
import { API_FAILURE, API_SUCCESS } from "../utils/constants";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        fetchTopRatedMovies();
    },[]);

    const fetchTopRatedMovies = async()=>{
        try{
        const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const jsonData = await movies.json();
        dispatch(addTopRatedMovies(apiResponseWrapper(jsonData,API_SUCCESS)));
        }
        catch(e){
            dispatch(addTopRatedMovies(apiResponseWrapper(e,API_FAILURE)));
        }
    }
}

export default useTopRatedMovies;