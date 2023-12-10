import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/redux/userSlice'
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

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

  console.log(user);

  return (
    <div className='absolute w-full p-4 z-10 bg-gradient-to-b from-black'>
      <div className='flex justify-between align-middle items-center'>
      <img className='w-44' src={LOGO}
       alt='logo'/>
       {
          user && (
            <div className='flex items-center'>
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
