import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {parse} from 'node-html-parser'


function SignupForm() {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({})
  const [isChecked,setIsChecked] = useState(false)

  const [errorMessage,setErrorMessage] = useState("")

 

  function handleInputChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleCheckChange(e){
    setIsChecked(!isChecked)
    if(isChecked){
      setErrorMessage("")
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    if(isChecked){
      setErrorMessage("")
      axios.post('/api/v1/users/signup', formData)
      .then(function (response) {
        console.log("response",response);
        navigate("/signin")
        
      })
      .catch(function (error) {
        console.log("error",error)
        setErrorMessage(error.response.data.message)
        console.log("status",error.response.status)
       
      });
    }

    else{
      setErrorMessage("You must agree to the terms and conditions")
    }
  }

  return (
    <div className=' h-screen w-full  '>
      <div className=' p-6 flex justify-end font-medium'>
        <span>Already a member? <Link to="/signin" className='text-link tracking-tighter font-sans'> Sign In</Link> </span> 
      </div>
      <div className=' flex flex-col justify-center items-center p-10'>
      <div className=' w-1/2'>
      <h2 className="text-2xl font-bold mb-5 tracking-tight font-sans pl-4">Sign up to Dribbble</h2>
      {
        errorMessage?<div className='pb-2 pl-4 text-red-500 font-medium tracking-tight'>  {errorMessage}</div>:<div></div>
      }
      
        <div className=' '>
          <form onSubmit={handleSubmit} className='flex flex-col justify-start  gap-5 p-6'>

            <div className='flex justify-between '>
              <div className='flex flex-col w-1/2 pr-2 '>
                <label htmlFor='name' className='font-bold'>
                  Name
                </label>
                <input type='text' name='name' id='name' placeholder='Name'  onChange={handleInputChange} className='bg-input rounded-lg px-4 py-[6px]'></input>

              </div>
              <div className='flex flex-col w-1/2 pl-2 '>
                <label htmlFor='username' className='font-bold'>
                  Username
                </label>
                {
                  errorMessage && errorMessage == "Username already exist" ? <input type='text' name='username' id='username' placeholder='Username'  onChange={handleInputChange} className='text-red-500 bg-red-100 rounded-lg px-3 py-[6px]'></input>:<input type='text' name='username' id='username' placeholder='Username'  onChange={handleInputChange} className='bg-input rounded-lg px-3 py-[6px]'></input>
                }
              

              </div>
            </div>

            <div className='flex flex-col  '>
              <label htmlFor='email' className='font-bold'>
                Email
              </label>
              {
                  errorMessage && errorMessage == "Email already exist" ? <input type='email' name='email' id='email' placeholder='user@domain.com'  onChange={handleInputChange} className='text-red-500 bg-red-100 rounded-lg px-3 py-[6px] focus:bg-input focus:text-black '></input>:<input type='email' name='email' id='email' placeholder='user@domain.com'  onChange={handleInputChange} className='bg-input rounded-lg px-3 py-[6px]'></input>
                }
                 

              
               
              

            </div>
            <div className='flex flex-col  '>
              <label htmlFor='password' className='font-bold'>
                Password
              </label>
              <input type='password' name='password' id='password' placeholder='6+ characters'  onChange={handleInputChange} className='bg-input rounded-lg px-3 py-[6px] placeholder-gray-400'></input>

            </div>
            <div className='flex gap-2  '>
            <input type='checkbox' name='checkbox' id='checkbox' checked={isChecked} onChange={handleCheckChange} className='border-2 border-input h-5 w-8'></input>
            <label htmlFor='checkbox' className=' text-textfade tracking-tighter font-medium leading-4 text-sm'>
              Creating an account means you're okay with our 
            <a href='#' className='text-link'> Terms of Service</a>,<a href='#' className='text-link'> Privacy Policy</a>, and our default <a href='#' className='text-link'>Notification Settings</a></label>
            </div>
            <div>
              <button className='bg-button hover:bg-pink-600 text-white px-12 py-1 rounded-md'>Create Account</button>
            </div>
          </form>
        </div>
        <div className=' text-fadedtext text-xs font-medium w-5/6 pl-5'>
          <p>
            This site is protected by reCAPTCHA and the Google <a href='#' className='text-link'>Privacy Policy</a> and <a href='#' className='text-link'>Terms of Service</a> apply.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignupForm
