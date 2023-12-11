import { useEffect } from "react";
import openai from '../utils/openai'
import { API_OPTIONS } from "../utils/api_constants";
import { useDispatch } from "react-redux";
import { addSearchMovies } from "../utils/redux/moviesSlice";

const useMovieSearch = (searchText)=>{

    const dispatch = useDispatch();


    useEffect(()=>{
        searchMoviesName()
    },[])

    const searchMovies = async(movieName)=>{
        
     const movieResult =  await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&page=1', API_OPTIONS);
        
    }

    const searchMoviesName = async()=>{
        
        const searchContent = 'Act as a Movie recommender for the following query text : '+searchText+' . Only Suggest 5 movies , comma separated . For Example - Sholay,Chup Chup ke, Don, Gadar, Ghayal'
        try{
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchContent }],
            model: 'gpt-3.5-turbo',
          });
          console.log(chatCompletion?.choices[0]?.message?.content.split(','));
         const movieNames = chatCompletion?.choices[0]?.message?.content.split(',')

          const movies = movieNames?.map((movieName=>searchMovies(movieName)));

          const movieList = Promise.all(movies);

          

          dispatch(addSearchMovies({
            movieNames:movieNames,
            movieList:movieList
          }))
        }
        catch(e){

        }

    }

   
}

export default useMovieSearch;