import React from 'react'
import SideImage from '../components/SignUp/SideImage'
import SignupForm from '../components/SignUp/SignupForm'

function signup() {
  return (
    <div className='flex flex-row'>
     <div className='w-1/3'>
     <SideImage />
     </div>
<div className='flex-1'>
<SignupForm />
  </div>      
    </div>
  )
}

export default signup