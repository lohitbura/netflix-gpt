import React from 'react'
import { lang } from '../utils/langConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

    const langKey = useSelector(store=>store.config.langKey);

  return (
    <div className='pt-[8%]'>
            <form className='relative bg-black w-6/12 mx-auto grid grid-cols-12 rounded-lg'>
                <input className='border border-black rounded-lg px-4 py-2 my-4 mx-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
                <button className=' bg-red-700 rounded-lg px-4 py-2 my-4 mr-4 col-span-3 text-white'>{lang[langKey].search}</button>
            </form>
    </div>
  )
}

export default GptSearchBar
