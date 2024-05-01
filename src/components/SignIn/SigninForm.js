import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SigninForm() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({})
    
    const [errorMessage,setErrorMessage] = useState("")
  
    function handleInputChange(e){
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    
  
    function handleSubmit(e){
      e.preventDefault()
      console.log(formData)
      // navigate("/profilepage")
        // axios.post('/auth/signin', formData)
        // .then(function (response) {
        //   console.log(response);
          
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
      
        axios.post('/api/v1/users/signin', formData)
        .then(function (response) {
          console.log("response",response);
          // console.log('cookie',response.getHeader("Set-Cookie"));
          navigate("/profilepage")
          
        })
        .catch(function (error) {
          setErrorMessage(error.response.data.message)
          console.log("msg",error.response.data.message);
          console.log("status",error.response.status);
        });
      
  
      
    }
  return (
    <div className=' h-screen w-full  '>
      <div className=' p-6 flex justify-end font-medium'>
        <span>Don't have an Account? <Link to='/' className='text-link tracking-tighter font-sans'> Sign Up</Link> </span> 
      </div>
      <div className=' flex flex-col justify-center items-center p-10'>
      <div className=' w-1/2'>
      <h2 className="text-2xl font-bold mb-5 tracking-tight font-sans pl-4">Sign In to Dribbble</h2>
      {
        errorMessage && errorMessage?<div className='pb-2 pl-4 text-red-500 font-medium tracking-tight'>  {errorMessage}</div>:<div></div>
      }
      
        <div className=' '>
          <form onSubmit={handleSubmit} className='flex flex-col justify-start  gap-5 p-6'>

            <div className='flex justify-between '>
             
              <div className='flex flex-col'>
                <label htmlFor='email' className='font-bold'>
                  Email
                </label>
                {
                  errorMessage && errorMessage == "User not found" ? <input type='email' name='email' id='email' placeholder='Email'  onChange={handleInputChange} className='text-red-500 bg-red-100 rounded-lg px-3 py-[6px]'></input> :<input type='email' name='email' id='email' placeholder='Email'  onChange={handleInputChange} className='bg-input rounded-lg px-3 py-[6px]'></input>
                }
              

              </div>
            </div>

           
            <div className='flex flex-col  '>
              <label htmlFor='password' className='font-bold'>
                Password
              </label>
              <input type='password' name='password' id='password' placeholder='6+ characters'  onChange={handleInputChange} className='bg-input rounded-lg px-3 py-[6px] placeholder-gray-400'></input>

            </div>
           
            <div>
              <button className='bg-button hover:bg-pink-600 text-white px-12 py-1 rounded-md'>SignIn </button>
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

export default SigninForm