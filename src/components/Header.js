import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {

    signOut(auth).then(() => {

    })
      .catch((error) => {
        navigate("/error")
      })

  }

  const handleGptSearchClick = () => {

    dispatch(toggleGptSearchView())

  }

  const handleLanguageChange = (e) => {
     
    dispatch(changeLanguage(e.target.value))
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        let { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse")


      }
      else {

        dispatch(removeUser())
        navigate("/")

      }
    })

    return () => unsubscribe()

  }, [])

  return (
    <div className=' w-[99.9%] absolute px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44 ' src={LOGO} alt='' />



      {user && <div className='flex p-4'>

        { showGptSearch && 
          <select className='mr-3 font-semibold rounded-lg bg-gray-800 text-white'
          onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} val={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        <button onClick={handleGptSearchClick} className='px-4 py-2 rounded-lg text-white bg-purple-600 font-semibold mr-4'>{ showGptSearch ? "Homepage" : " GPT Search" }</button>
        <img className='w-12 h-12 rounded-lg' src={user?.photoURL} alt='logo-signin' />

        <button onClick={handleSignOut} className='w-24 h-12 px-3 py-1 rounded-md text-white bg-red-600 font-semibold ms-3'>
          Sign Out
        </button>
      </div>}

    </div>
  )
}

export default Header