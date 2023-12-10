import { useEffect } from "react";
import { API_OPTIONS } from "../utils/api_constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux/moviesSlice";
import { apiResponseWrapper } from "../utils/api_response_wrapper";
import { API_FAILURE, API_SUCCESS } from "../utils/constants";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        fetchPopularMovies();
    },[]);

    const fetchPopularMovies = async()=>{
        try{
        const popularMovies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const jsonData = await popularMovies.json();
        dispatch(addPopularMovies(apiResponseWrapper(jsonData,API_SUCCESS)));
        }
        catch(e){
            dispatch(addPopularMovies(apiResponseWrapper(e,API_FAILURE)));
        }
    }
}

export default usePopularMovies;