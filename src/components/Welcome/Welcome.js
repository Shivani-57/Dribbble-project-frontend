import React, { useState } from 'react'
import imageOne from '../../images/card-1.png'
import imageTwo from '../../images/card-2.png';
import imageThree from '../../images/card-3.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate()
    const [isDisabled, setIsDisabled] = useState(true)
    const [role, setRole] = useState()
    function handleCardClick(selectedrole){
        setRole(selectedrole)
        setIsDisabled(false)
    }

    function handleFinishClick(){
        console.log("selected role",role)

        axios.post('/api/v1/users/welcome',{role:role})
        .then(function(response){
            console.log("response.data",response.data)
            console.log("response.data.data",response.data.data)
            console.log("response.data.data.user",response.data.data.user)
            localStorage.setItem("userData",JSON.stringify(response.data.data.user));
            navigate("/verify-email")
        })
        .catch(function(error){
            console.log("error",error)
        })
    }
    
    return (
        <div>
            <div className='flex h-screen w-full '>
                <div className=' w-1/6 pl-16 pt-10 '>
                    <span className=' text-3xl font-semibold font-Sacramento text-pinktext'>dribbble</span>
                </div>
                <div className='flex flex-col flex-1 '>
                    <div className=''>

                        <div className='border px-4 py-2 bg-returnbg shadow-sm inline-block'>R</div>

                    </div>
                    <div className='flex-1 flex items-center border '>
                        <div className='inline-block my-4 ml-14 border'>
                            <div className=''>
                                <p className='text-center px-2 py-3 text-3xl font-bold tracking-tight'>What brings you to Dribbble ?</p>
                                <p className='text-gray-500 tracking-tight p-2 text-center'>Select the options that describe you. Don't worry you can explore the other options later</p>
                            </div>
                            <div className='mt-20'>
                                <div className=' flex space-x-12'>
                                    <div className='border-2 border-gray-200 rounded-xl flex flex-col items-center' onClick={()=>{handleCardClick('designer')}}>
                                        
                                            <div className=' flex items-center justify-center'>
                                                <img src={imageOne} className='rounded-xl h-40  p-2' alt='Imageone'></img>
                                            </div>
                                            <div className='flex items-center justify-center w-2/3 leading-5' ><p class="text-center text-gray-600 tracking-tighter font-semibold">I'm a designer looking to share my work</p></div>
                                            <div>
                                                <input type='radio' name="selectedRole" id='selected-card' checked={role === "designer"} onChange={()=>{handleCardClick('designer')}} ></input>
                                            </div>
                                        
                                    </div>
                                    <div className='border-2 border-gray-200 rounded-xl flex flex-col items-center' onClick={()=>{handleCardClick('hirer')}}>
                                        
                                            <div className='flex items-center justify-center'>
                                                <img src={imageTwo} className=' rounded-xl h-40 p-2' alt='Imagetwo'></img>
                                            </div>
                                            <div className='flex items-center justify-center  w-2/3 leading-5' ><p class="text-center text-gray-600 tracking-tighter font-semibold">I'm looking to hire a designer</p></div>
                                            <div>
                                                <input type='radio' name="selectedRole" id='selected-card' checked={role === "hirer"} onChange={()=>{handleCardClick('hirer')}} ></input>
                                            </div>
                                        
                                    </div>
                                    <div className='border-2 border-gray-200 rounded-xl flex flex-col items-center' onClick={()=>{handleCardClick('inspiration')}}>
                                        
                                            <div className='flex items-center justify-center'>
                                                <img src={imageThree} className=' rounded-xl h-40 p-2' alt='Imagethree'></img>
                                            </div>
                                            <div className='flex items-center justify-center    w-2/3 leading-5' ><p class="text-center text-gray-600 tracking-tighter font-semibold">I'm looking for design inspiration</p></div>
                                            <div>
                                                <input type='radio' name="selectedRole" id='selected-card' checked={role === "inspiration"} onChange={()=>{handleCardClick('inspiration')}} ></input>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-10 flex justify-center'>
                                <button className={`bg-button text-white px-16 py-1 rounded text-base ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isDisabled} onClick={handleFinishClick}>Finish</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome