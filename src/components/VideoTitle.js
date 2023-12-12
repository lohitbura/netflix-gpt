import React from 'react'

const VideoTitle = ({movieData}) => {

  return (
    <div className='absolute pl-3 sm:pl-16 pt-[25%] sm:pt-[18%] w-screen aspect-video bg-gradient-to-r from-[#111111]'>
        <h1 className='text-3xl sm:text-6xl text-white '>{movieData.title}</h1>
        <p className=' hidden sm:inline-block my-8 w-3/12 text-white'>{movieData.overview}</p>
        <div>
            <button className=' bg-white rounded-lg py-1 px-4'>
                   ▶️ Play 
            </button>
            <button className=' bg-red-700 rounded-lg py-1 px-2 ml-2 text-white'>
                   ：More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle
