import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({movieData}) => {

  if(!movieData.poster_path) return ;

  return (
    <div className='mr-2 w-32'>
      <img  className='w-32 cursor-pointer' src={IMAGE_CDN+movieData.poster_path} />
    </div>
  )
}

export default MovieCard
