import React from 'react'
import { useSelector } from 'react-redux'
import useVideoBackgroundTrailer from '../hooks/useVideoBackgroundTrailer';
import { API_FAILURE } from '../utils/constants';

const VideoBackground = ({ movieId }) => {


    useVideoBackgroundTrailer(movieId);
    const movieData = useSelector(state => state.movies?.videoBackgroundTrailer);

    if (movieData === null) return;

    if (movieData.status === API_FAILURE) return;



    return (
        <div className='w-screen'>
            <iframe className='w-screen aspect-video border-0'
             src={'https://www.youtube.com/embed/'+movieData.data.key+'?autoplay=1&mute=1&loop=1'}
              title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picturee" 
                allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
