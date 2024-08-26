import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true)

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div >
      <Header/>
      <div className='absolute'>
        <img src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png" alt='logo'  />
      </div>
      <div className='w-[36vw] absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white  bg-opacity-90 rounded-lg'>
        <form>
          <h1 className='font-bold text-2xl'>{isSignInForm === true ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&  <input type='text' placeholder='Full Name'  className='p-4 my-3 w-full bg-gray-700 rounded-lg' />}
          <input type='text' placeholder='Email'  className='p-4 my-3 w-full bg-gray-700 rounded-lg' />
          <input type='password' placeholder='Password' className='p-4 my-3 w-full  bg-gray-700 rounded-lg'  />
          <button className='bg-red-700 p-4 my-3 w-full rounded-lg'>{isSignInForm === true ? "Sign In" : "Sign Up"}</button>
        </form>
        <p onClick={toggleSignForm} className='font-semibold text-sm cursor-pointer'>  {isSignInForm ? "New to NetFilx , Sign up Now! " : "Already Have Account , Logged In"} </p>
      </div>
    </div>
  )
}

export default Login