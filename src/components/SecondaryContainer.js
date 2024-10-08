import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)

  return (
    movies.nowPlayingMovies && ( 
      <div className=''>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular "} movies={movies.popularMovies}/>
      <MovieList title={"Trending"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcomming Movies"} movies={movies.upCommingMovies}/>
      <MovieList title={"Horror"} movies={movies.popularMovies}/>
    
    </div>
    )  
    
  )
}

export default SecondaryContainer