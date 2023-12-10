import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(state=>state.movies?.nowPlayingMovies);

    if(movies===null) return;

    const movieData = movies?.data?.results[2]

    console.log(movieData);


  return (
    <div>
   
      <VideoTitle movieData={movieData}/>
      <VideoBackground movieId={movieData.id}/>
    
    </div>
  )
}

export default MainContainer;
