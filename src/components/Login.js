import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'




const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {

    // checkValidateData(email , password)
    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkValidateData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return;

    if (!isSignInForm) {
      //logic for signup form validation

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user , {
            displayName : name.current.value , photoURL : "https://avatars.githubusercontent.com/u/113179845?v=4"
          }).then(()=>{

            const {uid , email , displayName , photoURL} = auth.currentUser
            dispatch(
              addUser({
                uid:uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
            ) 


            navigate("/browse")
          })
          .catch((error)=>{
            setErrorMessage(error)
            navigate("/")
          })
          
          

        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + "-" + errorMessage)
          navigate("/")

        })
    }
    else {
      // logic for signin form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrorMessage(errorCode + "-" + errorMessage)
          navigate("/")


        })

    }


    // console.log(message)
  }

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div >
      <Header />
      <div className='absolute'>
        <img src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png" alt='logo' />
      </div>
      <div className='w-[36vw] absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white  bg-opacity-90 rounded-lg'>
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className='font-bold text-2xl'>{isSignInForm === true ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-3 w-full bg-gray-700 rounded-lg' />}
          <input ref={email}
            type='text'
            placeholder='Email'
            className='p-4 my-3 w-full bg-gray-700 rounded-lg' />
          <input ref={password}
            type='password'
            placeholder='Password'
            className='p-4 my-3 w-full  bg-gray-700 rounded-lg' />
          <p className='text-red-500 py-4 font-semibold'>{errorMessage}</p>
          <button className='bg-red-700 p-4 my-3 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm === true ? "Sign In" : "Sign Up"}</button>
        </form>
        <p onClick={toggleSignForm} className='font-semibold text-sm cursor-pointer'>  {isSignInForm ? "New to NetFilx , Sign up Now! " : "Already Have Account , Logged In"} </p>
      </div>
    </div>
  )
}

export default Login