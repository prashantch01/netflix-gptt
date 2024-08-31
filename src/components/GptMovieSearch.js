import React from 'react'
import lang from '../utils/languageContants'
import { useSelector } from 'react-redux'


const GptMovieSearch = () => {

    const langKey = useSelector((store)=>store.config.lang)
    console.log('Current Language Key:', langKey);

  return (
    <div>
        <div className='pt-[10%]  flex justify-center'>
            <form className='bg-black w-1/2 grid grid-cols-12' onClick={(e)=>e.preventDefault()}>
                <input className='p-4 m-4 col-span-9 rounded-lg font-semibold  ' type='search' 
                placeholder={lang[langKey]?.gptSearchPlaceholderr} />
                <button className='px-4 py-2 m-4 col-span-3 rounded-lg bg-red-600 text-white font-semibold'>{lang[langKey]?.search}</button>
            </form>
        </div>
    </div>
  )
}

export default GptMovieSearch