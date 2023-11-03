import React from 'react'
import client from '../assets/client.jpg'


const Middle = () => {
  return (
    <div className='py-15 px-4 w-full p-8 bg-white'>
    <div className='max-w-[1240p]mx-auto grid md:grid-cols-2 '>
    <img src={client} alt='loremipsum' className='w-[500px] mx-auto my-4'></img>
      <div className='flex flex-col justify-center'>
        <p className='items-center text-xl font-bold text-[#9a00df]'>We've Cracked The Code To Simplify Your Legal Journey....</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
              Say Goodbye To Incompetence
          </h1>
          <p className=''>Introducing FidaLaw: Your Ultimate Solution to Legal Woes**
Are you tired of the endless search for the right lawyer? Frustrated with unreliable, incompetent legal assistance? We understand your struggle. Finding the perfect legal counsel can be a daunting journey, but not anymore. Welcome to FidaLaw, your fast track to legal brilliance.
*The Legal Lifesaver You've Been Waiting For*</p>
         
         <button className='rounded-xl text-[#9a00df] bg-black py-4 mt-7 w-[200px] font-medium my-6 mx-auto px-5' >Get Early Access</button>
      </div>
    </div>
    
</div>
  )
}

export default Middle