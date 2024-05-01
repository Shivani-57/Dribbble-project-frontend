import React from 'react'
import sideImage from '../../images/side-image.png'

function SideImage() {
  return (
    <div className='bg-imagebg h-screen w-full  py-10 pl-4' >
      <div className='  flex flex-col gap-10'>
        <div className='flex flex-col space-y-3  pl-12'>
          
          <div className='text-dribbble mb-1 text-2xl font-semibold font-Sacramento'>dribbble</div>
          <div className='text-fontcolor font-sans tracking-tight sm:text-base font-bold md:text-lg lg:text-xl  xl:text-2xl  flex flex-col '>
            <p>Discover the world's top</p>
            <p>Designers & Creatives.</p>
          </div>
        </div>
        <div className=' '>
          <img src={sideImage} alt=' HERE'></img>
        </div>
        <div className=' text-petercolor pl-12 tracking-tighter text-sm font-medium'>
          Art by <a href='#' className='underline'>Peter Tarka</a>
        </div>
      </div>
    </div>
  )
}

export default SideImage