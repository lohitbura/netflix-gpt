import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }

  console.log(user);

  return (
    <div className='absolute w-full p-4 z-10 bg-gradient-to-b from-black'>
      <div className='flex justify-between align-middle items-center'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
