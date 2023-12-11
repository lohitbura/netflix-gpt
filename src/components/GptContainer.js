import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { BACKGROUND_LOGIN } from '../utils/constants'

const GptContainer = () => {
  return (
    <div>
        <div className='absolute'>
        <img src={BACKGROUND_LOGIN} />
        </div>
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
  )
}

export default GptContainer
