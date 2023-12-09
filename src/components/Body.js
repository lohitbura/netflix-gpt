import React, { useEffect } from 'react'
import { appRouter } from '../utils/router'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/redux/userSlice'

const Body = () => {

  const dispatch = useDispatch();

  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid, email, displayName, photoURL} = user;

        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))


      } else {
        dispatch(removeUser())
      }
    });
  },[])

  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body
