import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {  addPopoularMovies, addUpCommingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'



const  useUpcommingMovies = () =>{


    const dispatch = useDispatch()

  const getUpcommingMovies = async () =>{

    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1" , API_OPTIONS)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addUpCommingMovies(json.results))

  }


  useEffect(()=>{
    getUpcommingMovies()
  } , [])

}

export default useUpcommingMovies;