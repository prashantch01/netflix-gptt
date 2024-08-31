import React from 'react'
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  // console.log(title, movies)
  return (

    <div className='w-screen p-6 bg-black text-white scrollbar-hidden '>
        <h2 className='text-3xl font-semibold py-6'>{title}</h2>
      <div className='flex overflow-x-scroll '>

        <div className='flex '>
          {movies?.map((mov => (

            <MovieCard key={mov.id} posterpath={mov.poster_path} />
          )))}
        </div>
      </div>
    </div>

  )
}

export default MovieList