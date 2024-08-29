import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'



const VideoBackground = ({ movieId }) => {


  const trailerV = useSelector(store =>store.movies?.tralierVideo)
  
  useMovieTrailer(movieId)

  

  return (
    <div>
          {/* Note  : IF you want to do full screen then add w-screen and aspect-video property to css in VideoTitle and VideoBackground in Div tag or Parent Container  */}

      <iframe className='w-screen aspect-[5/2]'
      src={"https://www.youtube.com/embed/" + trailerV?.key + "?&autoplay=1&mute=1"}
      
      title="YouTube video player" 
      allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>

    </div>
  )
}

export default VideoBackground




