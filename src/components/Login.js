import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateForm } from '../utils/validateForm';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/redux/userSlice';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmitButton = () => {
        console.log(name);
        if (isLogin) {
            const message = validateForm([
                {
                    'type': 'email',
                    'value': email.current?.value ?? ""
                },
                {
                    'type': 'password',
                    'value': password.current?.value ?? ''
                },
            ]);
            setErrorMessage(message);
            if (message) return;
        }
        else {
            const message = validateForm([
                {
                    'type': 'name',
                    'value': name.current?.value ?? ""
                },
                {
                    'type': 'email',
                    'value': email.current?.value ?? ""
                },
                {
                    'type': 'password',
                    'value': password.current?.value ?? ''
                },
            ]);
            setErrorMessage(message);
            if (message) return;
        }

       

        if (isLogin) {
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+' : '+errorMessage)
                });
        }
        else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/30217398?v=4"
                      }).then(() => {
                        dispatch(addUser({
                            uid:auth.currentUser.uid,
                            email:auth.currentUser.email,
                            displayName:auth.currentUser.displayName,
                            photoURL:auth.currentUser.photoURL
                          }))
                      }).catch((error) => {
                        
                      });
               
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+' : '+errorMessage)
                });
        }


    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                />
            </div>
         
            <div >
                <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 my-44 mx-auto right-0 left-0 py-4 px-8 bg-black text-white rounded-lg bg-opacity-80'>
                    <h1 className='my-4 text-3xl'>{isLogin ? "Sign In" : "Sign Up"}</h1>
                    {
                        !isLogin && (
                            <input ref={name} type='text' placeholder='Full Name' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                        )
                    }
                    <input ref={email} type='text' placeholder='Email' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                    <input ref={password} type='password' placeholder='Password' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                    <p className='my-4 text-red-800 font-bold'>{errorMessage}</p>
                    <button onClick={() => {
                        handleSubmitButton();
                    }} className='w-full bg-red-800 p-4 my-6 rounded-lg'>{isLogin ? "Sign In" : "Sign Up"}</button>
                    <p className=' cursor-pointer my-4' onClick={() => {
                        isLogin ? setIsLogin(false) : setIsLogin(true);
                    }}>{isLogin ? "New User? Sign up here" : "Already have an account? Sign In"}</p>
                </form>
            </div>

        </div>
    )
}

export default Login
