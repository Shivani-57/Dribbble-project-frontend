import React from 'react'
import UserIcon from './Profile/UserIcon'

function Header() {
    const storedUserData = localStorage.getItem('userData');
    // console.log("storeduserData", storedUserData);
    // console.log("name",storedUserData.name);
    const userData = storedUserData? JSON.parse(storedUserData) : null;
    // console.log("UserData: " + userData)
    // console.log("name after",userData.name)
    return (
        <div className='border-2 border-pink-800 px-1 py-2 shadow-md w-screen' >
            <div className=' flex justify-between'>
                <div className='p-1 gap-6 flex justify-between '>
                    <div className=' '>
                        <div className='px-2 py-2'>
                            <span className='text-black  text-3xl font-semibold font-Sacramento'>dribbble</span>
                        </div>

                    </div>
                    <div className=' flex gap-6'>
                        <div className=' text-center m-auto'>

                            <span className='text-base text-textfade font-medium tracking-tighter'>Inspiration</span>
                        </div>
                        <div className='text-center m-auto'>
                            <span className='text-base text-textfade font-medium tracking-tighter'>Find Work</span>
                        </div>
                        <div className='text-center m-auto'>
                            <span className='text-base text-textfade font-medium tracking-tighter'>Learn Design</span>
                        </div>
                        <div className='text-center m-auto'>
                            <span className='text-base text-textfade font-medium tracking-tighter'>Go Pro</span>
                        </div>
                        <div className='text-center m-auto'>
                            <span className='text-base text-textfade font-medium tracking-tighter'>Hire Designers</span>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-3'>
                    <div className='inline-flex items-center'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 w-32 h-8 rounded-md border bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

            
                
                    <div className=' flex items-center px-2 pb-1 '>
                        cross
                    </div>
                    <div className='flex items-center'>
                        <UserIcon imageUrl={userData.profileImage}/>
                    </div>
                    <div className=' px-2  py-2'>
                        <button className='bg-button text-white px-3 py-2 rounded-md'>Upload</button>
                    </div>
                </div>
            

            </div>
        </div>
    )
}

export default Header