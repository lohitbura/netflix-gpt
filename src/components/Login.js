import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isLogin,setIsLogin] = useState(true);

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                    />
            </div>
            <div className='absolute bg-gradient-to-b from-black w-[100%] h-[100%]'>

            </div>
            <div >
                <form className='absolute w-3/12 my-44 mx-auto right-0 left-0 py-4 px-8 bg-black text-white rounded-lg bg-opacity-80'>
                    <h1 className='my-4 text-3xl'>{isLogin?"Sign In":"Sign Up"}</h1>
                    {
                        !isLogin && (
                    <input type='text' placeholder='Full Name' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                        )
                    }
                    <input type='text' placeholder='Email' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                    <input type='password' placeholder='Password' className='w-full bg-[#151515] p-4 my-4 rounded-lg' />
                    <button className='w-full bg-red-800 p-4 my-6 rounded-lg'>{isLogin?"Sign In":"Sign Up"}</button>
                    <p className=' cursor-pointer' onClick={()=>{
                        isLogin?setIsLogin(false):setIsLogin(true);
                    }}>{isLogin?"New User? Sign up here":"Already have an account? Sign In"}</p>
                </form>
            </div>

        </div>
    )
}

export default Login
