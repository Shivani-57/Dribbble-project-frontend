import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate()
  const [isDisabled,setIsDisabled]=useState(true)
  const [image, setImage] = useState(null);
  const [formData,setFormData] = useState({})

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("file: " + file)
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    setFormData({...formData,imageUrl: e.target.files[0]}); 
  };

  function handleInputChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})

  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("formdata",formData)

    axios.post('/api/v1/users/profile',formData,{
      headers: {
        // Set the Content-Type header to multipart/form-data
        // This is crucial for multer to correctly parse the form data
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function(response){
      console.log("response",response)
      navigate('/welcomepage')
    })
    .catch(function(error){
      console.log("error",error)
    })
  }

  useEffect(() => {
    const { location } = formData;
    if(location) 
    {const isLocationValid = location.trim() !== '';
    const isImageValid = image !== null;
    setIsDisabled(!(isLocationValid && isImageValid));}
  }, [formData, image]);

  return (
    <div className='h-screen w-full '>
      <div className=' flex h-screen '>
        <div className=' w-1/6 pl-16 pt-10 '>
          <span className=' text-3xl font-semibold font-Sacramento text-pinktext'>dribbble</span>
        </div>
       <div className='flex-1 ml-4  '>
        <div className=''>
        <span className='border px-4 py-2 bg-returnbg shadow-sm'><FontAwesomeIcon icon="fa-solid fa-less-than" />R</span>
        </div>
          
        
       <div className='  inline-block ml-28 mt-5'>
          <div className='  mt-20 mb-10'>
            <p className='text-3xl font-sans tracking-tight font-bold mb-2'>Welcome! Let's Create your profile</p>
            <p className='tracking-normal font-sans text-sm text-gray-500 font-medium mt-3 '>Let others get to know you better! You can do these later</p>
          </div>
          <div className=' my-5 '>
            <form className=' my-1 ' onSubmit={handleSubmit}>
              <div className=' my-4 '>
                <h3 className='text-xl font-bold mb-4 font-sans tracking-tight'>Add an avatar</h3>
                <div className='flex gap-3  p-2'>
                  <div className={`w-32 h-32 rounded-full   ${image?'':"border-2 border-dashed border-gray-400"}`}>
                  {image ? (
          <img src={image} alt='Uploaded' className='w-full h-full object-cover rounded-full' />
        ) : (
          <FontAwesomeIcon icon="fa-regular fa-image" />
        )}
                    
                  </div>
                  <div className='flex flex-col ml-4'>
                  <div className=' m-2'>
                    <label htmlFor="image-upload" className='border-2 border-gray-200 shadow-sm px-3 py-1 rounded font-medium tracking-tight text-sm font-sans cursor-pointer'>Choose image</label>
                    <input
                      id='image-upload'
                      name='imageUrl'
                      type='file'
                      accept='image/*'
                      className='hidden'
                      onChange={handleImageChange}
                    />
                    
                  </div>
                  <p className=' text-fadedtext tracking-tight font-medium text-sm  m-2' >Or choose one of our default</p>
                  </div>
                </div>

              </div>
              <div className=' flex flex-col my-8 '>
                <label className=' py-4 font-bold tracking-tight font-sans text-xl'>Add your location</label>
                <input type='text' id='location' name='location' onChange={handleInputChange} className="outline-none border-b border-gray-300 pb-1 text-sm font-medium " placeholder='Enter a location' />
              </div>
              <div className=' my-10'>
                <button className={`bg-button text-white px-16 py-1 rounded text-sm ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}disabled={isDisabled}>Next</button>

              </div>


            </form>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Profile