import React from 'react'
import { API_FAILURE } from '../utils/constants';
import MovieCard from './MovieCard';

const MovieList = ({title,data}) => {

    if(data===null) return;
    if(data.status===API_FAILURE) return;
  return (
    <div className='pl-8'>
      <h1 className='text-white text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-auto'>
        <div className='flex space-x-4'>
        {
            data.data.results.map((movie)=><MovieCard movieData={movie}/>)
        }
      </div>
     
        </div>
    
     
    </div>
  )
}

export default MovieList
