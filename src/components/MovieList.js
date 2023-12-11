import React from 'react'
import { API_FAILURE } from '../utils/constants';
import MovieCard from './MovieCard';

const MovieList = ({title,data}) => {

  console.log(data);
  console.log(title);

    if(data===null) return;

  return (
    <div className='pl-8'>
      <h1 className='text-white text-3xl py-4'>{title}</h1>
        <div className='flex overflow-x-auto'>
        <div className='flex space-x-4'>
        {
            data.results.map((movie)=><MovieCard movieData={movie}/>)
        }
      </div>
     
        </div>
    
     
    </div>
  )
}

export default MovieList
