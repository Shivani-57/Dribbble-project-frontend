import React from 'react'
import SideImage from '../components/SignUp/SideImage'
import SigninForm from '../components/SignIn/SigninForm'

function SignIn() {
  return (
    <div className='flex flex-row'>
    <div className='w-1/3'>
    <SideImage />
    </div>
<div className='flex-1'>
<SigninForm />
 </div>      
   </div>
  )
}

export default SignIn