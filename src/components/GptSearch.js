import React from 'react'
import GptMovieSearch from "./GptMovieSearch"
import GptMovieSuggestion from "./GptMovieSuggestion"
import {  BG_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-20 '>
        <img className='' src={BG_URL} alt='logo' />
      </div>

      <GptMovieSearch/>
      <GptMovieSuggestion/>

      
      

    </div>
  )
}

export default GptSearch