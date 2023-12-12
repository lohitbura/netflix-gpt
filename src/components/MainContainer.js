import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(state=>state.movies?.topRatedMovies);

    if(movies===null) return;

    const movieData = movies?.data?.results[3]

    console.log(movieData);


  return (
    <div className=' py-28 sm:py-0'>
   
      <VideoTitle movieData={movieData}/>
      <VideoBackground movieId={movieData.id}/>
    
    </div>
  )
}

export default MainContainer;
