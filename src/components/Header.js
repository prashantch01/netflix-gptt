import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () =>{

    signOut(auth).then(()=>{
        navigate("/")
    })
    .catch((error)=>{
      navigate("/error")
    })

    

  }

  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='' />


     
     { user &&  <div className='flex p-4'>
      <img className='w-12 h-12' src={user?.photoURL} alt='logo-signin'/>
     
      <button onClick={handleSignOut} className='w-24 h-12 px-3 py-1 rounded-md text-white bg-red-600 font-semibold ms-3'>
        Sign Out
      </button>
      </div> }

    </div>
  )
}

export default Header