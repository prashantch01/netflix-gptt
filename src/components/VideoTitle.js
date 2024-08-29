import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    
        <div className='pt-[22.5%] px-24 absolute text-white bg-gradient-to-r from-black w-screen '> 
        {/* Note  : IF you want to do full screen then add w-screen and aspect-video property to css in VideoTitle and VideoBackground in Div tag or Parent Container  */}
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='w-1/3 pt-5'>{overview}</p>

        <div className='mt-5'>
            <button className='px-12 p-4  bg-white text-black text-xl  rounded-lg hover:bg-opacity-80'>▶️ Play</button>
            <button className='mx-2 px-12 p-4 bg-gray-400 text-white text-xl bg-opacity-80 rounded-lg'>More Info</button>
        </div>

        </div>
   
  )
}

export default VideoTitle