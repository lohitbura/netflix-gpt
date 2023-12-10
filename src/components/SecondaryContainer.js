import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

    const nowPlayingData = useSelector(state=>state.movies?.nowPlayingMovies);
   const popularMoviesData = useSelector(state=>state.movies?.popularMovies);
   const topRatedMovies = useSelector(state=>state.movies.topRatedMovies);

  return (
    <div className=' bg-black'>
        <div className='relative z-10 -mt-40'>
        <MovieList title="Now Playing" data={nowPlayingData}/>
        <MovieList title="Top-Rated Movies" data={topRatedMovies}/>
         <MovieList title="Popular" data={popularMoviesData}/>
         <MovieList title="Comedy" data={nowPlayingData}/>
         <MovieList title="Romantic" data={nowPlayingData}/>
        </div>
     
    </div>
  )
}

export default SecondaryContainer;
