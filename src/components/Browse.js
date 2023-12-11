import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptContainer from './GptContainer';


const Browse = () => {


  const toggleGptButtonState = useSelector(store=>store.gpt.toggleGptButtonState);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();


  return (
    <div>
      <Header />
      {
        toggleGptButtonState ? <GptContainer /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>

      }
    </div>
  )
}

export default Browse
