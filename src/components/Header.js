import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/redux/userSlice'
import { LOGO, supportedLanguage } from '../utils/constants';
import { toggleGptButton } from '../utils/redux/gptSlice';
import { changeLanguage } from '../utils/redux/configSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const toggleGptButtonState = useSelector(store=>store.gpt.toggleGptButtonState);
  const langKey = useSelector(store=>store.config.langKey);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid, email, displayName, photoURL} = user;

        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))
        navigate('/browse')

      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe();
    },[])

   const handleToggleButton = ()=>{
      dispatch(toggleGptButton());
    }

    const handleChangeLanguage = (e)=>{
      dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className='absolute w-full p-4 z-10 bg-gradient-to-b from-black'>
      <div className='flex justify-between align-middle items-center'>
      <img className='w-44' src={LOGO}
       alt='logo'/>
       {
          user && (
            <div className='flex items-center'>
             { toggleGptButtonState && (
              <select className=' bg-slate-500 py-2 px-4 rounded-lg text-white' onChange={(e)=>handleChangeLanguage(e)} defaultValue={langKey}>
                {
                  supportedLanguage.map((lang)=><option value={lang.value}>{lang.name}</option>)
                }
                    </select>
             )}
            
              <button className=' bg-red-700 text-white mx-4 py-2 px-4 rounded-lg' onClick={()=>handleToggleButton()}>{toggleGptButtonState?'Home Page':'Gpt Search'}</button>
              <img src={user.photoURL} className='w-14 rounded-lg'></img>
              <h3 className='mx-2 text-white cursor-pointer' onClick={()=>{
                handleSignOut()
              }}>Sign Out</h3>
            </div>
          )
       }
      </div>
      
    </div>
  )
}

export default Header
