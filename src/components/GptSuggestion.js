import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import { API_FAILURE } from '../utils/constants';

const GptSuggestion = () => {

    const movieNames = useSelector(store=>store.movies?.searchedMovieNames);
    const movieList = useSelector(store=>store.movies?.searchedMovieList);

    console.log(movieList)
    console.log(movieNames)

    if(movieList===null) return;
    if(movieList.status===API_FAILURE) return;

  return (
    <div className='relative bg-black p-15 m-10 bg-opacity-80'>
      {
         movieNames?.map((movie,index)=>
        <MovieList title={movie} data={movieList.data[index]} />
         )
      }
    </div>
  )
}

export default GptSuggestion
