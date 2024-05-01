import React from 'react'

function VerifyEmail() {
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData? JSON.parse(storedUserData) : null;
  return (
    <div className=' border-2 border-black h-screen w-screen'>
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4 p-20'>
        <h1 className=' text-4xl font-semibold mt-2'>Please verify your email...</h1>
        <div className=''>
          icon
        </div>
        <p className='text-lg font-normal font-sans tracking-tight text-textfade p-2'>Please verify your email address. We've sent a confirmation email to:</p>
        <span className='text-lg font-bold font-serif p-2'>{userData.email}</span>
        <p className='text-lg font-normal font-sans tracking-tight text-textfade p-2'>Click the confirmation link in that email to begin using Dribbble</p>
        <p className='text-lg font-normal font-sans tracking-tight text-textfade max-w-[64%] text-center leading-7 p-2'>
          Didn't receive a confirmation email? Check your spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-button font-semibold hover:cursor-pointer hover:underline'>resend the confirmation email</span>.
        </p>
        <p className='text-lg font-normal font-sans tracking-tighter text-textfade p-2'>Wrong email address? <span className='text-button font-semibold hover:cursor-pointer hover:underline'>Change it.</span></p>
      </div>
    </div>

  </div>
  )
}

export default VerifyEmail