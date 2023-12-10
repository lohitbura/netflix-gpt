import { useEffect } from "react"
import { API_OPTIONS } from "../utils/api_constants";
import { useDispatch } from "react-redux";
import { addVideoBackgroundTrailer } from "../utils/redux/moviesSlice";
import { apiResponseWrapper } from "../utils/api_response_wrapper";
import { API_FAILURE, API_SUCCESS } from "../utils/constants";


const useVideoBackgroundTrailer = (movieId) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        fetchMovieTrailer();
    },[])

    const fetchMovieTrailer = async()=>{
        try{
    const  movieTrailer =   await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
    const jsonData = await movieTrailer.json();
           const trailerData = jsonData.results.filter((video)=>video.type==='Trailer');
          const  trailer = trailerData.length!=0?trailerData[0]:jsonData[0]
             dispatch(addVideoBackgroundTrailer(apiResponseWrapper(trailer,API_SUCCESS)))
        }
        catch(e){
            dispatch(addVideoBackgroundTrailer(apiResponseWrapper(e,API_FAILURE)))
        }
    }
}

export default useVideoBackgroundTrailer;