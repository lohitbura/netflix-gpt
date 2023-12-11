import React, { useRef } from 'react'
import { lang } from '../utils/langConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'
import { API_OPTIONS } from "../utils/api_constants";
import { useDispatch } from "react-redux";
import { addSearchMovies } from "../utils/redux/moviesSlice";
import { apiResponseWrapper } from '../utils/api_response_wrapper';
import { API_SUCCESS } from '../utils/constants';

const GptSearchBar = () => {

    const langKey = useSelector(store=>store.config.langKey);
    const dispatch = useDispatch();
    const searchText = useRef(null);


    const searchMovies = async(movieName)=>{
        
       const movieResult =  await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&page=1', API_OPTIONS);
        const jsonData = await movieResult.json()
      
       return jsonData;   
       }

    const handleSearchButton = async()=>{

        const searchContent = 'Act as a Movie recommender for the following query text : '+searchText.current.value+' . Only Suggest 5 movies, comma separated . For Example answer like this only - Sholay,Chup Chup ke, Don, Gadar, Ghayal. I need movies name with comma separated and dont use any extra text please'
        try{
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchContent }],
            model: 'gpt-3.5-turbo',
          });
         const movieNames = chatCompletion?.choices[0]?.message?.content.split(',')
       
          const movies = movieNames?.map((movieName=>searchMovies(movieName)));

            Promise.all(movies).then((value)=>{
            dispatch(addSearchMovies({
                movieNames:movieNames,
                movieList: apiResponseWrapper(value,API_SUCCESS)
              }))
          });

          
        }
        catch(e){

        }
    
    }

  return (
    <div className='pt-[8%]'>
            <form className='relative bg-black w-6/12 mx-auto grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} className='border border-black rounded-lg px-4 py-2 my-4 mx-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button className=' bg-red-700 rounded-lg px-4 py-2 my-4 mr-4 col-span-3 text-white'
                onClick={()=>handleSearchButton()}
                >{lang[langKey].search}</button>
            </form>
    </div>
  )
}

export default GptSearchBar
