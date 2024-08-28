import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { LOGO } from '../utils/constants'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () =>{

    signOut(auth).then(()=>{
        
    })
    .catch((error)=>{
      navigate("/error")
    })

  }


  useEffect(()=>{

    const unsubscribe =  onAuthStateChanged(auth , (user)=>{

        if(user)
        {
           let {uid , email , displayName , photoURL} = user;
           dispatch(addUser({uid:uid , email:email, displayName:displayName , photoURL:photoURL}))
           navigate("/browse")
           
           
        }
        else{

            dispatch(removeUser())
            navigate("/")

        }
    })

    return () => unsubscribe()

} , [])

  return (
    <div className=' w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='' />


     
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